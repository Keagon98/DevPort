// List dependencies
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');

// Create functions

// SCSS
function compilescss() {
    return src('styles/main.scss')
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(minify())
        .pipe(dest('Assets'))
}

// JS
function jsmin() {
    return src('scripts/script.js')
        .pipe(terser())
        .pipe(dest('Assets'))
}

// Create WatchTask
function watchTask() {
    watch('styles/*.scss', compilescss);
    watch('scripts/*.js', jsmin);
}

// Default Gulp
exports.default = series(
    compilescss,
    jsmin,
    watchTask
);