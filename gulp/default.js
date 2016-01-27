import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', (done) => {
  if (process.env.NODE_ENV === 'development') {
    // runSequence(['browser-sync', 'watch'], done)
    runSequence(['scripts', 'views', 'styles'], 'modernizr', ['browser-sync', 'watch'], done) //use this when upgrading method
  } else {
    // runSequence(['scripts', 'views'], 'modernizr', done)
  }
})

gulp.task('default', function(done) {
	process.env.NODE_ENV = 'development'
	runSequence(['browser-sync', 'watch'], done);
});