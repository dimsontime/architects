var gulp = require('gulp');
var watch = require('gulp-watch');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

var srcDir = "./src/"
var distDir = "./dist/"



function pugB() {
    return gulp.src(srcDir + "pug/*.pug")
    .pipe(pug({
       doctype: 'html',
       pretty: false
    }))
    .pipe(gulp.dest(distDir))
    .pipe(livereload());
}

function sassB() {
    return gulp.src(srcDir + '/scss/*.scss')
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(gulp.dest(distDir))
      .pipe(livereload());
}

var watch = gulp.series( pugB, sassB, function(){
    livereload.listen();
	gulp.watch(srcDir + "pug/*.pug", pugB);
	gulp.watch(srcDir + '/scss/*.scss', sassB);
	console.log('Watcher started');
});

gulp.task('watch', watch);