import gulp from "gulp";
import babel from "gulp-babel";
import concat from "gulp-concat";
import sass from "gulp-sass";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import cleanCSS from "gulp-clean-css";
import htmlmin from 'gulp-htmlmin';
import del from "del";

const paths = {
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
  },
  img: {
    src: "src/*.png",
    dest: "dist"
  }
};

export const clean = () => del(["dist"]);

export function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(
      rename({
        basename: "main",
        suffix: ".min"
      })
    )
    .pipe(gulp.dest(paths.styles.dest));
}

export function scripts() {
  return gulp
    .src(paths.scripts.src, {sourcemaps: true})
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat("main.min.js"))
    .pipe(gulp.dest(paths.scripts.dest));
}

export function html() {
  return gulp
    .src(paths.html.src)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(paths.html.dest));
}

export function img() {
  return gulp
    .src(paths.img.src)
    .pipe(gulp.dest(paths.img.dest));
}

function watchFiles() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.html.src, styles);
  gulp.watch(paths.img.src, styles);
}

export {watchFiles as watch};

const build = gulp.series(clean, gulp.parallel(styles, scripts, html, img));
export default build;
