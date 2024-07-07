/* eslint-disable no-undef */
const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync').create();
const svgSprite = require('gulp-svg-sprite');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/',
    },
    notify: false,
  });
}

function styles() {
  return src('app/scss/style.scss')
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(concat('style.min.css'))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 10 versions'],
        grid: true,
      }),
    )
    .pipe(dest('app/css'))
    .pipe(browserSync.stream());
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-carousel/slick/slick.js',
    'app/js/mixitup.min.js',
    'app/js/main.js',
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream());
}

function images() {
  return src('app/images/**/*.*')
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: true,
              cleanupIDs: false,
            },
          ],
        }),
      ]),
    )
    .pipe(dest('dist/images'));
}

function build() {
  return src([
    'app/site.webmanifest',
    'app/**/*.html',
    'app/css/style.min.css',
    'app/js/main.min.js',
  ]).pipe(dest('dist'));
}

function cleanDist() {
  return del('dist');
}

function sprites() {
  return src('app/images/icons/sprites/*.svg')
    .pipe(
      cheerio({
        run: ($) => {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: { xmlMode: true },
      }),
    )
    .pipe(replace('&gt;', '>'))
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg',
          },
        },
      }),
    )
    .pipe(dest('app/images'));
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/images/icons/sprites/*.svg'], sprites);
  watch(['app/**/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.scripts = scripts;
exports.images = images;
exports.browsersync = browsersync;
exports.watching = watching;
exports.build = series(cleanDist, images, build);
exports.cleanDist = cleanDist;
exports.sprites = sprites;

exports.default = parallel(sprites, styles, scripts, browsersync, watching);
