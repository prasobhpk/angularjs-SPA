var gulp = require('gulp');
var config = require('../../config').watch;
var runSequence = require('run-sequence');

/**
 * watch files for changes
 */
gulp.task('watch', function () {
    gulp.watch(config.sass, function(){
        runSequence('sass','build:styles','copy:assets');
    });
    gulp.watch(config.scripts, function(){
        runSequence('concat:js', 'jshint','copy:assets');
    });
    gulp.watch(config.images, ['copy:images','copy:assets']);
    gulp.watch(config.svg, ['copy:fonts','copy:assets']);
    gulp.watch(config.html, ['copy:html']);

});
