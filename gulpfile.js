// import gulp from 'gulp';
// import htmlmin from 'gulp-htmlmin';
// import cleanCSS from 'gulp-clean-css';
// import terser from 'gulp-terser';
// import rename from 'gulp-rename';

const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const rename = require('gulp-rename');

// Minify HTML
function minifyHTML() {
    return gulp
      .src('src/*.html') // Source folder containing HTML files
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('./')); // Destination folder
  }
  
  // Minify CSS
  function minifyCSS() {
    return gulp
      .src('src/*.css') // Source folder containing CSS files
      .pipe(cleanCSS())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('dist/')); // Destination folder
  }
  
  // Minify JS
  function minifyJS() {
    return gulp
      .src('src/*.js') // Source folder containing JS files
      .pipe(terser())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('dist/')); // Destination folder
  }
  
  // Watch for changes
  function watchFiles() {
    gulp.watch('src/*.html', minifyHTML);
    gulp.watch('src/*.css', minifyCSS);
    gulp.watch('src/*.js', minifyJS);
  }
  
  // Default task
  exports.default = gulp.series(minifyHTML, minifyCSS, minifyJS, watchFiles);