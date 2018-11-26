const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require("browser-sync").create();

/*=========== SASS ===========*/
gulp.task('sass', () => {
	gulp.src('./src/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/css/'));
});

/*============ html ===========*/
gulp.task('html', () => {
	gulp.src('./src/*.html')
		.pipe(gulp.dest('./dist'));
});

/*============ js ===========*/
gulp.task('js', () => {
	gulp.src('./src/js/**/*.js')
		.pipe(gulp.dest('./dist/js'));
});

gulp.task('reload', () => {
	browserSync.reload();
});

gulp.task('watch', () => {
	browserSync.init({
		server: "./dist"
	});
	gulp.watch('./src/*.html', ['html', 'reload']);
	gulp.watch('./src/sass/**/*.scss', ['sass', 'reload']);
	gulp.watch('./src/js/**/*.js', ['js', 'reload']);
});

// gulp.task('browser-sync', () => {
// 	browserSync.init({
// 		server: {
// 			baseDir: './dist'
// 		}
// 	});
// });