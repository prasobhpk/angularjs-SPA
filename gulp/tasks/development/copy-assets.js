var gulp    = require('gulp');
var config  = require('../../config').copy.assets;

/**
 * Minimize HTML
 */
gulp.task('copy:assets', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
