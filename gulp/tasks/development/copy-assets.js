var gulp = require('gulp');
var notify = require('gulp-notify');
var config = require('../../config').copy.assets;


/**
 * Minimize HTML
 */
gulp.task('copy:assets', function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest))
        .pipe(notify({message: 'Copied files from '+config.src+' to '+config.dest,onLast:true}));
});
