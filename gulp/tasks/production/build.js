var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:production', function (callback) {
    runSequence(/*'delete',*/'copy:html','sass','build:styles',
        [
            'concat:vendorJs',
            'concat:js',
            'copy:images',
            'copy:fonts'
        ],
        'base64',
        'copy:assets',
        [
            'optimize:css',
            'optimize:js',
            'optimize:images',
            'optimize:html',
            'copy:fonts:production'
        ],
        [
            'webp'/*,
         'gzip'*/
        ],
        'revision',
        'rev:collect',
        callback);
});
