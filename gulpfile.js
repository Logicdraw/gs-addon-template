// const exec = require('child_process').exec;
// const fs = require('fs');
// const readline = require('readline');

// const cwsupload = require('chrome-webstore-upload');
const eslint = require('gulp-eslint');
// const {google} = require('googleapis');
const gulp = require('gulp');
// const jeditor = require('gulp-json-editor');
// const zip = require('gulp-zip');

// const CWS_ID = 'aojcceglbipehndciapjedoomockgagl';

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


