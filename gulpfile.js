const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");


// Compilar SASS y añadir Autoprefixer

gulp.task("sass", function(){
	return gulp.src(["src/*.scss"])
		.pipe(sass())
		.pipe(autoprefixer("last 2 versions"))
		.pipe(gulp.dest("css"))
		.pipe(browserSync.stream());
});

// Watch & Serve
gulp.task("serve", ["sass"], function(){
	browserSync.init({	
		server: "./"	
	});

	gulp.watch(["src/*.scss"], ["sass"]);
	gulp.watch(["*.html"]).on("change", browserSync.reload);
});

// Default
gulp.task("default", ["serve"]);