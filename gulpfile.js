var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var cache = require('gulp-cache');
var cp = require('child_process');
var browserSync = require('browser-sync');

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

// Build the Jekyll Site
gulp.task('jekyll-build', function (done) {
    return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

// Rebuild Jekyll and page reload
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

// Wait for jekyll-build, then launch the Server
gulp.task('browser-sync', ['sass', 'img', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        },
        notify: false
    });
});

// Compile files
gulp.task('sass', function () {
    return gulp.src('assets/css/scss/main.scss')
        .pipe(sass({
            outputStyle: 'expanded',
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css'));
});

// Compression images
gulp.task('img', function() {
	return gulp.src('assets/img/**/*')
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
    .pipe(gulp.dest('_site/assets/img'))
    .pipe(browserSync.reload({stream:true}));
});

// Watch scss, html, img files
gulp.task('watch', function () {
    gulp.watch('assets/css/scss/**/*.scss', ['sass']);
    gulp.watch('assets/js/**/*.js', ['jekyll-rebuild']);
    gulp.watch('assets/img/**/*', ['img']);
    gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', '_pages/*.html', '_posts/*'], ['jekyll-rebuild']);
});

//  Default task
gulp.task('default', ['browser-sync', 'watch']);








// Theme transition clics


var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});
