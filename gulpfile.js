var gulp = require('gulp'),
    watch = require('gulp-watch'),
    print = require('gulp-print'),
    path = require('path'),
    read = require('read-file'),
    mkdirp = require('mkdirp'),
    file = require('gulp-file'),
    fs = require('fs'),
    shell = require('shelljs');

gulp.task('watch', function() {
    return watch('grammars/**/*.ne', function(file) {
        //console.log("changed " + file.path);
        //console.log("changed cwd" + file.cwd);
        var testname = path.basename(file.path, ".ne") + ".test.ne";
        var output = path.join(path.dirname(file.path), path.basename(file.path, ".ne") + ".js");
        //console.log(output);
        var compilestr = "nearleyc " + file.path + " -o " + output;

        read(file.path, 'utf-8', function(err, buffer) {
            //console.log(err);
            //console.log(typeof buffer);
            var includereg = /@include.*\n/g;

            var matches;
            while ((matches = includereg.exec(buffer)) != null) {
                var matched = matches[0];
                if (matched) {
                    //console.log(matched);
                    var filenamereg = /".*"/g;
                    var depPathRel = filenamereg.exec(matched)[0];
                    if (depPathRel) {
                        var temp = depPathRel.replace(/"/g,"");
                        console.log(path.join(path.dirname(file.path), temp));
                    }

                }
            }
            mkdirp('./tmp', function(err) {
                if (!err) {
                    fs.writeFile(path.join("./tmp", testname), buffer, function(err) {
                        console.log(err);
                    })
                }
            })
        });

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