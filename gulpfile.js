var gulp = require("gulp");

var jade = require("gulp-jade");

gulp.task("template", function(){
    return gulp.src("./src/jade/*.jade")
            .pipe(jade())
            .pipe(gulp.dest("./"));
});

gulp.task("default", function(){
    gulp.run("template");
});
