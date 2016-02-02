import gulp from 'gulp';
import plugins from 'gulp-load-plugins';
import config from '../config/assets/assets';
import browserSync from 'browser-sync';

const $ = plugins();
const reload = browserSync.reload

gulp.task('watch', ['watchify'], () => {

	// server
	gulp.watch(config.server.views).on('change', browserSync.reload);
	gulp.watch(config.server.allJS, ['eslint']);

	// client
	gulp.watch(config.client.js, ['eslint']);
	gulp.watch(config.client.views, ['views-watch']);
  gulp.watch(config.client.sass, ['styles']);
  gulp.watch(config.client.images, ['images']);
});
