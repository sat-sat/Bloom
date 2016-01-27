import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import config from '../config/assets/assets'
import browserSync from 'browser-sync'
import autoprefixer from 'autoprefixer'

const $ = plugins()

gulp.task('styles', () => {
  return gulp.src(config.client.sass)
    .pipe(!config.minify ? $.sourcemaps.init() : $.util.noop())
    .pipe($.sass({
      indentedSyntax: true,
      includePaths: require('node-bourbon').with(config.client.lib.sass)
    }))
    .on('error', $.notify.onError())
    .pipe($.postcss([
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ]))
    .pipe(!config.minify ? $.sourcemaps.write() : $.util.noop())
    .pipe(config.minify ? $.minifyCss() : $.util.noop())
    .pipe($.rename('main.css'))
    .pipe(gulp.dest('public/client/stylesheets'))
    .pipe(browserSync.reload({
      stream: true
    }))
})