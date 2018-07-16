var gulp = require('gulp');

var ckeditorPath = 'node_modules/ckeditor';
var libPath = 'lib';

gulp.task('ckeditor', function() {
    return gulp.src([
        ckeditorPath+'/ckeditor.js', 
        ckeditorPath+'/config.js', 
        ckeditorPath+'/styles.js', 
        ckeditorPath+'/lang/en-gb.js', 
        ckeditorPath+'/skins/moono-lisa/*'
    ],  {base: ckeditorPath})
    .pipe(gulp.dest(libPath+'/ckeditor/dist'));
});

gulp.task('default', ['ckeditor']);