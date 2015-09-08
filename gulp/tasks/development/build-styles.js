var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('../../config').concat.css;

gulp.task('build:styles', function () {
    return gulp.src(config.src)
        .pipe(concat('app.css'))
        .pipe(gulp.dest(config.dest));
});
