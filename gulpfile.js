var gulp = require('gulp'),
    watch = require('gulp-watch'),
    print = require('gulp-print'),
    shell = require('shelljs');

gulp.task('watch', function() {
    return watch('*.ne', function(file) {
        console.log("changed " + file.path);
        shell.exec("nearleyc cricnlp.ne -o cricnlp.js", function(code, stdout, stderr) {
            if(stderr == ""){
            	console.log("compiled successfully");
            	shell.echo("done");
            	shell.exec("nearley-test -i 'top scorers in t20' cricnlp.js");
            }
        });

    });
});


gulp.task('default', ['watch']);