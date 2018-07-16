var gulp = require('gulp');

var ckeditorPath = 'node_modules/ckeditor';
var libPath = 'lib';

gulp.task('ckeditor', function() {
    return gulp.src([
        ckeditorPath+'/ckeditor.js', 
        ckeditorPath+'/config.js', 
        ckeditorPath+'/styles.js', 
        ckeditorPath+'/lang/en-gb.js', 
        ckeditorPath+'/skins/moono-lisa/*',
        ckeditorPath+'/plugins/tableselection/styles/tableselection.css',
        ckeditorPath+'/plugins/scayt/skins/moono-lisa/scayt.css',
        ckeditorPath+'/plugins/scayt/dialogs/dialog.css',
        ckeditorPath+'/plugins/wsc/skins/moono-lisa/wsc.css',
        ckeditorPath+'/contents.css',
        ckeditorPath+'/plugins/tableselection/styles/tableselection.css'
    ],  {base: ckeditorPath})
    .pipe(gulp.dest(libPath+'/ckeditor/dist'));
});

gulp.task('default', ['ckeditor']);


