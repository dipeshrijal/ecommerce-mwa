var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch', function () {
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('pages/**/*.html', browserSync.reload);
    gulp.watch('public/assets/**/*.js', browserSync.reload);
    gulp.watch('public/assets/css/**/*.css', browserSync.reload);
});

// Configure the browserSync task
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: ''
        }
    })
});

gulp.task('default', ['watch', 'browserSync']);

function onError(err) {
    console.log(err);
    this.emit('end');
}