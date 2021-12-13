const { series } = require('gulp');
const gulp = require ('gulp');
const sass = require ('gulp-sass') (require('sass'));



  function buildStyles2() {
    return gulp.src('./scss/**/*.scss')
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  }

  function copy() {
    return gulp.src('./node_modules/bootstrap/dist/js/*')
      .pipe(gulp.dest('./js'));
  }

  exports.compila = buildStyles2;
  exports.copiar = copy;
  exports.build = series(buildStyles2, copy);