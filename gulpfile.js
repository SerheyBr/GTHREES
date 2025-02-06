import gulp from 'gulp'
import * as sass from 'sass'
import gulpSass from 'gulp-sass'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify-es'
import browserSyncLib from 'browser-sync'
import autoprefixer from 'gulp-autoprefixer'
import clean from 'gulp-clean'
import fileInclude from 'gulp-file-include'
import sourcemaps from 'gulp-sourcemaps'
import imagemin from 'gulp-imagemin'

const scss = gulpSass(sass)
const browserSync = browserSyncLib.create()

// Пути
const paths = {
   src: {
      scss: 'src/scss/**/*.scss',
      js: ['src/js/**/*.js', '!src/js/**/*.min.js'], // Исключаем минифицированные файлы
      img: 'src/assets/img/**/*',
      html: ['src/templates/**/*.html', '!src/templates/partials/**/*.html'],
   },
   dist: {
      css: 'dist/css',
      js: 'dist/js',
      img: 'dist/assets/img',
      html: 'dist',
   },
   watch: {
      scss: 'src/scss/**/*.scss',
      js: 'src/js/**/*.js',
      img: 'src/assets/img/**/*',
      html: 'src/templates/**/*.html',
   },
   clean: 'dist',
}

// Обработка стилей
export function styles() {
   return gulp
      .src(paths.src.scss)
      .pipe(sourcemaps.init())
      .pipe(scss({ outputStyle: 'compressed' }).on('error', scss.logError))
      .pipe(
         autoprefixer({
            overrideBrowserslist: ['last 10 versions'],
            cascade: false,
         }),
      )
      .pipe(concat('style.min.css'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(paths.dist.css))
      .pipe(browserSync.stream())
}

// Обработка скриптов
export function scripts() {
   return gulp
      .src(paths.src.js)
      .pipe(sourcemaps.init())
      .pipe(concat('main.min.js'))
      .pipe(uglify.default())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(paths.dist.js))
      .pipe(browserSync.stream())
}

// Оптимизация изображений
export function images() {
   return gulp
      .src(paths.src.img, { encoding: false })
      .pipe(imagemin())
      .pipe(gulp.dest(paths.dist.img))
}

// Сборка HTML с шаблонизацией
export function html() {
   return gulp
      .src(paths.src.html)
      .pipe(fileInclude({ prefix: '@@', basepath: '@file' }))
      .pipe(gulp.dest(paths.dist.html))
      .pipe(browserSync.stream())
}

// Очистка папки dist
export function cleanDist() {
   return gulp.src(paths.clean, { allowEmpty: true }).pipe(clean())
}

// Запуск локального сервера
export function browsersync() {
   browserSync.init({
      server: { baseDir: paths.dist.html },
      startPath: '/services.html',
      notify: false,
   })
}

// Отслеживание изменений
export function watching() {
   gulp.watch(paths.watch.scss, styles)
   gulp.watch(paths.watch.js, scripts)
   gulp.watch(paths.watch.img, images)
   gulp.watch(paths.watch.html, html)
}

// Сборка проекта
export const build = gulp.series(
   cleanDist,
   gulp.parallel(styles, scripts, images, html),
)

// Дефолтная задача (разработка)
export default gulp.parallel(
   styles,
   scripts,
   images,
   html,
   browsersync,
   watching,
)
