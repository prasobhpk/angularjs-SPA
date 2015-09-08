var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var size = require('gulp-size');
var config = require('../../config').optimize.js;

/**
 * Copy and minimize JS files
 */
gulp.task('optimize:js', function () {
    return gulp.src(config.src)
        //.pipe(concat('app.js'))
        .pipe(uglify(config.options))
        .pipe(gulp.dest(config.dest))
        .pipe(size());
});
