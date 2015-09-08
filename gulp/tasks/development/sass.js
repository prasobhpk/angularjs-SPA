var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var config = require('../../config');

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
gulp.task('sass', function () {
    var sassConfig = config.sass.options;

    return gulp.src(config.sass.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(gulp.dest(config.sass.dest));

});
