var gulp = require('gulp'),
    watch = require('gulp-watch'),
    print = require('gulp-print'),
    path = require('path'),
    read = require('read-file'),
    mkdirp = require('mkdirp'),
    file = require('gulp-file'),
    fs = require('fs'),
    fsex = require('fs-extra'),
    color = require('gulp-color'),
    vinyl = require('vinyl'),
    q = require('q'),
    shell = require('shelljs');

function getDeps(buffer, dirname) {
    var includereg = /@include.*\n/g;
    var matches;
    var repmatches;
    var depsArr = [];
    while ((matches = includereg.exec(buffer)) != null) {
        var matched = matches[0];
        if (matched) {
            var filenamereg = /".*"/g;
            var depPathRel = filenamereg.exec(matched)[0];
            if (depPathRel) {
                var temp = depPathRel.replace(/"/g, "");
                var dep = path.join(dirname, temp);
                depsArr.push(new vinyl({ cwd: dirname, path: dep }));
            }

        }
    }
    var replacereg = /@include.*\n/g;
    var replacestr = [];
    while (true) {
        var match = replacereg.exec(buffer);
        if (match == null) {
            break;
        } else {
            replacestr.push(match[0]);
        }
    }

    for (var i = 0; i < replacestr.length; i++) {
        buffer = buffer.replace(replacestr[i], "");
    }
    return { buffer: buffer, depsArr: depsArr };
}

function getBufferAndDeps(file) {
    var buffer = read.sync(file.path, 'utf-8');
    var deps = getDeps(buffer, path.dirname(file.path));
    return { buffer: deps.buffer, deps: deps.depsArr };
};

function execShell(command) {
    var deferred = q.defer();
    shell.exec(command, function(code, stdout, stderr) {
        if (stderr == "") {
            deferred.resolve();
        } else {
            deferred.reject(new Error(stderr));
        }
    });
    return deferred.promise;
}

function pathExists(path) {
    var deferred = q.defer();
    fs.access(path, function(err) {
        if (err == null) {
            deferred.resolve(true);
        } else {
            deferred.reject(new Error(err));
        }
    });
    return deferred.promise;
}

gulp.task('watch-tests', function() {
    return watch('grammars/**/*.test.json', { events: ['add', 'change'] }, function(file) {
        console.log(color("changed test : " + file.path, "BLUE"));
        var srcfilename = path.join(path.dirname(file.path), path.basename(file.path, ".test.json") + ".ne");
        console.log(srcfilename);
        var srcfile = new vinyl({ cwd: path.dirname(file.path), path: srcfilename });


        var tempname = path.basename(srcfile.path, ".ne") + ".temp.ne";
        var tempdest = path.join("./tmp", tempname);
        var outputdest = path.join("./tmp", path.basename(srcfile.path, ".ne") + ".output.js");
        var compilestr = "nearleyc " + tempdest + " -o " + outputdest;

        var glob = "";
        var deps = [];
        var bufferAndDeps = getBufferAndDeps(srcfile);
        glob += bufferAndDeps.buffer;
        deps = deps.concat(bufferAndDeps.deps);

        while (deps.length >= 0) {
            if (deps.length == 0) {
                fsex.ensureDir('./tmp')
                    .then(() => {
                        return fsex.outputFile(path.join("./tmp", tempname), glob);
                    })
                    .then(() => {
                        return execShell(compilestr);
                    })
                    .then(() => {
                        console.log(color("compiled successfully : " + path.basename(srcfile.path), "GREEN"));
                        return fsex.pathExists(file.path);
                    })
                    .then(exists => {
                        if (exists) {
                            console.log(color("=> test exists", 'GREEN'));
                            return fsex.readJson(file.path);
                        } else {
                            console.log(color("=> no tests exists", "YELLOW"));

                            return;
                        }
                    })
                    .then(testfile => {

                        if (!testfile || !testfile.cases || testfile.cases.length == 0) return;
                        console.log(color(testfile.cases.toString(), "YELLOW"));
                        for (var i = 0; i < testfile.cases.length; i++) {
                            var current = testfile.cases[i];
                            var teststr = "nearley-test -i " + "'" + current + "' " + outputdest;


                            shell.exec(teststr, { silent: true }, function(code, stdout, stderr) {
                                if (stderr == "") {
                                    console.log(color("passed case => " + this.current, "GREEN"));
                                } else {
                                    console.log(stderr);
                                    console.log(color("failed case => " + this.current, "RED"));
                                }
                            }.bind({ current: current }));


                        }
                    })
                    .catch(err => {
                        console.log(color(err, "RED"));
                        return;
                    });
            }
            var current = deps.pop();
            bufferAndDeps = getBufferAndDeps(current);
            glob += "\n" + bufferAndDeps.buffer;
            deps = deps.concat(bufferAndDeps.deps);
        }


    })
})



gulp.task('watch-grammars', function() {
    return watch('grammars/**/*.ne', { events: ['add', 'change'] }, function(file) {

        console.log(color("changed grammar : " + file.path, "BLUE"));

        var tempname = path.basename(file.path, ".ne") + ".temp.ne";
        var tempdest = path.join("./tmp", tempname);
        var outputdest = path.join("./tmp", path.basename(file.path, ".ne") + ".output.js");
        var compilestr = "nearleyc " + tempdest + " -o " + outputdest;

        var testfilename = path.join(path.dirname(file.path), path.basename(file.path, ".ne") + ".test.json");


        var glob = "";
        var deps = [];
        var bufferAndDeps = getBufferAndDeps(file);
        glob += bufferAndDeps.buffer;
        deps = deps.concat(bufferAndDeps.deps);



        while (deps.length >= 0) {
            if (deps.length == 0) {
                fsex.ensureDir('./tmp')
                    .then(() => {
                        return fsex.outputFile(path.join("./tmp", tempname), glob);
                    })
                    .then(() => {
                        return execShell(compilestr);
                    })
                    .then(() => {
                        console.log(color("compiled successfully : " + path.basename(file.path), "GREEN"));
                        return fsex.pathExists(testfilename);
                    })
                    .then(exists => {
                        if (exists) {
                            console.log(color("=> test exists", 'GREEN'));
                            return fsex.readJson(testfilename);
                        } else {
                            console.log(color("=> no tests exists", "YELLOW"));

                            return;
                        }
                    })
                    .then(testfile => {

                        if (!testfile || !testfile.cases || testfile.cases.length == 0) return;
                        console.log(color(testfile.cases.toString(), "YELLOW"));
                        for (var i = 0; i < testfile.cases.length; i++) {
                            var current = testfile.cases[i];
                            var teststr = "nearley-test -i " + "'" + current + "' " + outputdest;


                            shell.exec(teststr, { silent: true }, function(code, stdout, stderr) {
                                if (stderr == "") {
                                    console.log(color("passed case => " + this.current, "GREEN"));
                                } else {
                                    console.log(stderr);
                                    console.log(color("failed case => " + this.current, "RED"));
                                }
                            }.bind({ current: current }));


                        }
                    })
                    .catch(err => {
                        console.log(color(err, "RED"));
                        return;
                    });
            }
            var current = deps.pop();
            bufferAndDeps = getBufferAndDeps(current);
            glob += "\n" + bufferAndDeps.buffer;
            deps = deps.concat(bufferAndDeps.deps);
        }

    });
});


gulp.task('default', ['watch-grammars', 'watch-tests']);