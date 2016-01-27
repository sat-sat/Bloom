import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import config from '../config/assets/assets'
import path from 'path'
import browserSync from 'browser-sync'
import yargs from 'yargs'

const $ = plugins()

gulp.task('views', () => {
  return gulp.src(config.client.views)
    // .pipe($.jadeGlobbing({
    //   placeholder: {
    //     'layout': 'public/core/views/layout/layout.jade'
    //   },
    //   'ignore': 'public/core/view/layout'
    // }))
    .pipe($.jade({
      pretty: true,
      force: true,
      locals: {
        title: 'Journal App'
      }
      
    }))
    .pipe($.rename(function(file) {
      file.dirname = file.dirname.replace(path.sep + 'views', path.sep)
    }))
    .pipe(gulp.dest('./public/client/views'))
})

gulp.task('views-watch', ['views'], browserSync.reload);
