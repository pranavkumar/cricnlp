var gulp = require('gulp'),
    watch = require('gulp-watch'),
    print = require('gulp-print'),
    path = require('path'),
    read = require('read-file'),
    mkdirp = require('mkdirp'),
    file = require('gulp-file'),
    fs = require('fs'),
    vinyl = require('vinyl'),
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

    //console.log(buffer);
    return { buffer: buffer, depsArr: depsArr };
}

function getBufferAndDeps(file) {
    var buffer = read.sync(file.path, 'utf-8');
    var deps = getDeps(buffer, path.dirname(file.path));
    return { buffer: deps.buffer, deps: deps.depsArr };
};

gulp.task('watch', function() {
    return watch('grammars/**/*.ne', function(file) {
        console.log("changed " + file.path);
        var testname = path.basename(file.path, ".ne") + ".test.ne";
        var output = path.join(path.dirname(file.path), path.basename(file.path, ".ne") + ".js");
        var compilestr = "nearleyc " + file.path + " -o " + output;

        var glob = "start \n";
        var deps = [];
        var bufferAndDeps = getBufferAndDeps(file);
        glob += bufferAndDeps.buffer;
        deps = deps.concat(bufferAndDeps.deps);



        while (deps.length >= 0) {
            //console.log("here");
            if (deps.length == 0) {
                console.log(glob);
                break;
            }
            var current = deps.pop();
            //console.log(current);
            bufferAndDeps = getBufferAndDeps(current);
            //console.log("here2");
            //console.log(bufferAndDeps);
            glob += "\n" + bufferAndDeps.buffer;
            deps = deps.concat(bufferAndDeps.deps);
        }



        /*

        read(file.path, 'utf-8', function(err, buffer) {
            var depPaths = getDeps(buffer, path.dirname(file.path));
            mkdirp('./tmp', function(err) {
                if (!err) {
                    fs.writeFile(path.join("./tmp", testname), buffer, function(err) {
                        console.log(err);
                    })
                }
            })
        });
        */

        /*
        shell.exec(compilestr, function(code, stdout, stderr) {
            if (stderr == "") {
                console.log("compiled successfully");
                shell.echo("done");
                //shell.exec("nearley-test -i 'top scorers in test' cricnlp.js");
            }
        });
        */

    });
});


gulp.task('default', ['watch']);