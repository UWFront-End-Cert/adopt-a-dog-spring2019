var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  minifycss = require('gulp-minify-css'),
  rename = require('gulp-rename'),
  less = require('gulp-less');

gulp.task('minjs', function() {
  return gulp.src(['./js/jquery.rippleria.js'])
    .pipe(uglify())
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest('js'));
});

gulp.task('less', function() {
  return gulp.src(['./less/jquery.rippleria.less'])
    .pipe(less())
    .pipe(gulp.dest('./css'))
    .pipe(minifycss())
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest('./css'));
});


gulp.task('default', ['less', 'minjs'], function() {

});
