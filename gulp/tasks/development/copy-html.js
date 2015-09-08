var gulp    = require('gulp');
var config  = require('../../config').copy.html;

/**
 * Minimize HTML
 */
gulp.task('copy:html', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
