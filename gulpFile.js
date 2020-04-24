var gulp = require("gulp");
var jade = require("gulp-jade");
var sass = require("gulp-sass");

gulp.task("copyHTML", function () {
    return gulp.src("./Home.html").pipe(gulp.dest("./public/"));
});

gulp.task("jade", function () {
    // var YOUR_LOCALS = {};

    gulp
        .src("./Home.html/*.jade")
        .pipe(
            jade({
                // locals: YOUR_LOCALS
            })
        )
        .pipe(gulp.dest("./public/"));
});

gulp.task("sass", function () {
    return gulp
        .src("./CSS/scss/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./public/css"));
});

gulp.task("watch", function () {
    gulp.watch("./CSS/scss/**/*.scss", ["sass"]);
});