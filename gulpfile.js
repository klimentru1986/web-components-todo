const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './src/'
    }
  });

  gulp.watch('src/**/*').on('change', browserSync.reload);
});
