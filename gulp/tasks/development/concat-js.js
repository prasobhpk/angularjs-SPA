var gulp = require('gulp');
var concat = require('gulp-concat');
var size = require('gulp-size');
var config = require('../../config').concat.js;
var configVendor = require('../../config').concat.vendorJs;

/**
 * Copy and concat JS files
 */
gulp.task('concat:js', function () {
    return gulp.src(config.src)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(config.dest))
        .pipe(size());
});

gulp.task('concat:vendorJs', function () {
    return gulp.src(configVendor.src)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(configVendor.dest))
        .pipe(size());
});

