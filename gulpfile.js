/// <binding ProjectOpened='sass:watch' />
var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var cssmin = require('gulp-cssmin');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');

gulp.task('sass:clean', function () {
    return gulp.src(['./static/stylesheets/main.*'])
                .pipe(clean());
});

gulp.task('sass:build', ['sass:clean'], function () {

    return gulp.src(['static/sass/main.scss'])
                .pipe(sourcemaps.init())
                .pipe(sass())
                .on('error', function (error) {
                    console.error(error);
                    this.emit('end');
                })
                .pipe(autoprefixer())
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest('static/stylesheets/'))
                .pipe(livereload());
});

gulp.task('sass:build-prod', ['sass:clean'], function () {

    return gulp.src(['static/sass/main.scss'])
                .pipe(sass())
                .on('error', function (error) {
                    console.error(error);
                    this.emit('end');
                })
                .pipe(autoprefixer())
                .pipe(cssmin())
                .pipe(gulp.dest('static/stylesheets/'));
});


gulp.task('sass', ['sass:build']);

gulp.task('sass:watch', function () {
    livereload.listen({ start: true });
    gulp.watch(['static/sass/**/*.scss'], ['sass:build'])
});