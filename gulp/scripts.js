import gulp from 'gulp';
import plugins from 'gulp-load-plugins';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import config from '../config/assets/assets';
import browserSync from 'browser-sync';
import babelify from 'babelify';
import watchify from 'watchify';
import _ from 'lodash';

const $ = plugins();
const reload = browserSync.reload

gulp.task('eslint', () => {
  return gulp.src(_.union(config.server.allJS,
      config.client.js))
    .pipe($.cached('linting'))
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failOnError())
    .on('error', $.notify.onError())
})

function scriptsMain(watch) {
  var bundler

  bundler = browserify(config.client.jsCore, {
    basedir: '.',
    cache: {},
    packageCache: {},
    fullPaths: watch,
    debug: !config.minify
  })

  if (watch) {
    bundler = watchify(bundler)
    bundler.on('log', (msg) => console.log(msg))
    bundler.on('update', () => rebundle())
  }

  bundler.transform(babelify)

  function rebundle() {
    return bundler.bundle()
      .on('error', $.notify.onError())
      .pipe(source('main.js'))
      .pipe($.ngAnnotate())
      .pipe($.buffer())
      .pipe(config.minify ? $.uglify() : $.util.noop())
      .pipe(gulp.dest('public/client/scripts'))
      .pipe(reload({
        stream: true,
        once: true
      }))
  }

  return rebundle()

}


gulp.task('scripts', ['eslint'], () => {
  return scriptsMain(false)
})

gulp.task('watchify', ['eslint'], () => {
  return scriptsMain(true)
})