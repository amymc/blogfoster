var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('default', ['watch']);

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        proxy: "localhost:8080/"
    });
});

gulp.task('sass', function () {
  return gulp
    .src('./styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('./styles/**/*.scss', ['sass']);
});
