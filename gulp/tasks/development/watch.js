var gulp = require('gulp');
var config = require('../../config').watch;

/**
 * watch files for changes
 */
gulp.task('watch', function () {
    gulp.watch(config.sass, ['sass','build:styles','copy:assets']);
    gulp.watch(config.scripts, ['concat:js', 'jshint','copy:assets']);
    gulp.watch(config.images, ['copy:images','copy:assets']);
    gulp.watch(config.svg, ['copy:fonts','copy:assets']);
    gulp.watch(config.html, ['copy:html']);

});
