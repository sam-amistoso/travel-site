var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
    console.log("Huray - you created a Gulp task.");
});

gulp.task('html', function(){
    console.log("Imagine something useful being done to your HTML");
});

gulp.task('styles', function(){
    console.log("Imagine Sass or PostCSS tasks is running here.");
});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/**/*.css', function(){
        gulp.start('styles');
    });
});