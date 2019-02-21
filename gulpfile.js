"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.watch = watchFiles;
exports.default = exports.clean = void 0;

var _gulp = _interopRequireDefault(require("gulp"));

var _gulpBabel = _interopRequireDefault(require("gulp-babel"));

var _gulpConcat = _interopRequireDefault(require("gulp-concat"));

var _gulpSass = _interopRequireDefault(require("gulp-sass"));

var _gulpUglify = _interopRequireDefault(require("gulp-uglify"));

var _gulpRename = _interopRequireDefault(require("gulp-rename"));

var _gulpCleanCss = _interopRequireDefault(require("gulp-clean-css"));

var _gulpHtmlmin = _interopRequireDefault(require("gulp-htmlmin"));

var _del = _interopRequireDefault(require("del"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paths = {
  styles: {
    src: "src/scss/index.scss",
    dest: "dist"
  },
  scripts: {
    src: "src/js/main.js",
    dest: "dist"
  },
  html: {
    src: "src/*.html",
    dest: "dist"
  }
};

var clean = function clean() {
  return (0, _del.default)(["dist"]);
};

exports.clean = clean;

function styles() {
  return _gulp.default.src(paths.styles.src).pipe((0, _gulpSass.default)()).pipe((0, _gulpCleanCss.default)()).pipe((0, _gulpRename.default)({
    basename: "main",
    suffix: ".min"
  })).pipe(_gulp.default.dest(paths.styles.dest));
}

function scripts() {
  return _gulp.default.src(paths.scripts.src, {
    sourcemaps: true
  }).pipe((0, _gulpBabel.default)()).pipe((0, _gulpUglify.default)()).pipe((0, _gulpConcat.default)("main.min.js")).pipe(_gulp.default.dest(paths.scripts.dest));
}

function html() {
  return _gulp.default.src(paths.html.src).pipe((0, _gulpHtmlmin.default)({
    collapseWhitespace: true
  })).pipe(_gulp.default.dest(paths.html.dest));
}

function watchFiles() {
  _gulp.default.watch(paths.scripts.src, scripts);

  _gulp.default.watch(paths.styles.src, styles);
}

var build = _gulp.default.series(clean, _gulp.default.parallel(styles, scripts, html));

var _default = build;
exports.default = _default;
