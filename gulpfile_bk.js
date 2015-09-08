var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var ngdocs = require('gulp-ngdocs');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');

var buildDir = 'bin/';
var outputDir='bin/dist/'

var vendorJSFiles = ['bower_components/modernizr/modernizr.js',
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'bower_components/angularjs/angular.min.js',
    'bower_components/angular-route/angular-route.min.js'];

var appJSFiles = ['src/resources/js/general/app.js',
    'src/resources/js/general/modules.js',
    'src/resources/js/general/configs.js',
    'src/resources/js/general/maincontent.directive.js',
    'src/resources/js/general/phases.directive.js',
    'src/resources/js/home/*.js',
    'src/resources/js/phases/*.js',
    'src/resources/js/upcomingfilms/*.js',
    'src/resources/js/nextfilm/*.js'];
/*
 gulp.task('javascript:vendor', function (callback) {
 return gulp.src([
 './node_modules/jquery/dist/jquery.js',
 './node_modules/underscore/underscore.js',
 './node_modules/backbone/backbone.js'
 ])
 .pipe(sourcemaps.init())
 // getBundleName creates a cache busting name
 .pipe(concat(getBundleName('vendor')))
 .pipe(uglify())
 .pipe(sourcemaps.write('./'))
 .pipe(gulp.dest('./public/app'))
 .on('error', handleErrors);
 });
 */
/** tasks **/
gulp.task('javascript:vendor', function () {
    return gulp.src(vendorJSFiles)
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src'));
});

gulp.task('javascript:app', function () {
    return gulp.src(appJSFiles)
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src'));
});

/** sass tasks **/
gulp.task('sass', function () {
    return gulp.src(['src/resources/css/styles.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/resources/css'));
});

gulp.task('devCSS', function () {
    return gulp.src(['bower_components/bootstrap/dist/css/bootstrap.min.css',
        'src/resources/css/styles.css'])
        .pipe(concat('app.css'))
        .pipe(gulp.dest('src/resources/css/'));
});

gulp.task('buildStyles', function (callback) {
    runSequence('sass', 'devCSS', callback);
});

/** initialize **/
gulp.task('default', function (callback) {
    runSequence('javascript:vendor', 'javascript:app','buildStyles', callback);
});


/** watch **/
gulp.task('watch', function () {
    gulp.watch('src/resources/**/*.js', ['javascript:app']);
    gulp.watch('src/resources/**/*.scss', ['buildStyles']);
});