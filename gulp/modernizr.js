import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import config from '../config/assets/assets'
import _ from 'lodash'

const $ = plugins()


gulp.task('modernizr', () => {
  return gulp.src(_.union(config.client.js, config.client.css))
    .pipe($.modernizr({
      "options": [
        "setClasses",
        "addTest",
        "html5printshiv",
        "testProp",
        "fnBind"
      ],
      "tests": [
        "csstransitions",
        "flexbox"
      ]
    }))
    .pipe(config.minify ? $.uglify() : $.util.noop())
    .pipe(gulp.dest('public/client/scripts'))
})