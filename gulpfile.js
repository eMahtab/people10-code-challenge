var gulp=require('gulp'),
    jshint=require('gulp-jshint'),
    stylish=require('jshint-stylish'),
    paths={
    	js:['./app/client/js/**/*.js','./app/client/app.js','./app/server/**/*.js']
    };

gulp.task('jshint',function(){
	return gulp.src(paths.js)
	       .pipe(jshint())
	       .pipe(jshint.reporter(stylish));
})    