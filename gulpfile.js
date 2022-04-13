const eslint = require('gulp-eslint');

const gulp = require('gulp');


/**
 * Checks the code for style errors.
 */
gulp.task('lint', () => {
	return gulp.src(['src/**/*.js', 'gulpfile.js'])
			.pipe(eslint({
				baseConfig: require('./.eslintrc.js')
			}))
			.pipe(eslint.format())
			.pipe(eslint.failAfterError());
});


