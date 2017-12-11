var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var rename = require("gulp-rename");
var notify = require('gulp-notify');
var pkg = require('./package.json');

// Set the banner content
var banner = ['/*!\n',
  ' * DesignSprint - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2017-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' */\n',
  ''
].join('');

gulp.task('sass', function () {
  return gulp.src("sass/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(notify("CSS compiled"));
});

// ensure sass finishes, reload browser
gulp.task('sass-watch', ['sass'], function (done) {
  browserSync.reload();
  done();
});

// Configure the browserSync task
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
});

// Dev task with browserSync
gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch('sass/*.scss', ['sass-watch']);
  gulp.watch('*.html').on('change', browserSync.reload);
});
