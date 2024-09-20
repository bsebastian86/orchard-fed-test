const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css() {
  return src('./scss/*.scss').pipe(sass()).pipe(dest('./css/'));
}

exports.build = css;

exports.watch = function () {
  watch('./scss/*.scss', css);
};
