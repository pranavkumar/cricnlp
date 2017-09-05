var gulp = require('gulp'),
    watch = require('gulp-watch'),
    print = require('gulp-print'),
    path = require('path'),
    shell = require('shelljs');

gulp.task('watch', function() {
    return watch('grammars/**/*.ne', function(file) {
        console.log("changed " + file.path);
        var output = path.join(path.dirname(file.path), path.basename(file.path, ".ne") + ".js");
        console.log(output);
        var compilestr = "nearleyc " + file.path + " -o " + output;

        shell.exec(compilestr, function(code, stdout, stderr) {
            if (stderr == "") {
                console.log("compiled successfully");
                shell.echo("done");
                //shell.exec("nearley-test -i 'top scorers in test' cricnlp.js");
            }
        });

    });
});


gulp.task('default', ['watch']);