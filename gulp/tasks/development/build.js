var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function (callback) {
    runSequence(/*'delete',*/'copy:html','sass','build:styles',
        [
            'copy:images',
            'copy:fonts',
            'concat:vendorJs',
            'concat:js'
        ],
        'base64',
        'copy:assets',
        callback);
});
