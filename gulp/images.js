import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import config from '../config/assets/assets'
import browserSync from 'browser-sync'

const reload = browserSync.reload
const $ = plugins()

gulp.task('images-main', () => {
  return gulp.src(config.client.images)
    .pipe($.newer('./public/client/images'))
    .pipe($.imagemin())
    .pipe(gulp.dest('./public/client/images'))
    .pipe(reload({
      stream: true,
      once: true
    }))
});

gulp.task('images', ['images-main']);