var gulp = require('gulp'),
    watch = require('gulp-watch'),
    shell = require('shelljs');

gulp.task('watch', function() {
    return watch('*.ne', function(file) {
        console.log("changed " + file.path);
        shell.exec("nearleyc cricnlp.ne -o cricnlp.js");
        
    });
});


gulp.task('default', ['watch']);