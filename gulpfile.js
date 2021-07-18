const gulp = require('gulp')
const del = require('del')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const cssmin = require('gulp-minify-css')
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer')
const jsonminify = require('gulp-jsonminify2')
const babel = require('gulp-babel')
const minifycss = require('gulp-minify-css')
const sass = require('gulp-sass')
const runSequence = require('run-sequence');
const path = require('path')

//task
gulp.task('default', function () {
    runSequence('clean', 'wt_scss', 'watchHandle');
});
gulp.task('build', function () {
    runSequence('clean', 'cl_static', 'cp_scss2wxss', 'cp_json', 'cp_js');
});
//clean
gulp.task('clean', function () {
    return del([
        './dist/**/*',
        './src/**/*.wxss',
        '!./src/app.wxss',
        '!project.config.json'
    ]);
});
//clone
gulp.task('cl_static', function () {
    return gulp.src([
            './src/config.js',
            './src/**/*.wxml',
            './src/app.wxss',
            './src/**/assets/iconfont/*',
            './src/**/assets/images/**/*',
            './src/**/assets/imgs/**/*',
            '!./src/**/*.scss',
            '!./src/assets/data/**/*'
        ])
        .pipe(gulp.dest('./dist'))
});
//compress
gulp.task('cp_scss2wxss', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer([
            'iOS >= 8',
            'Android >= 4.1'
        ]))
        // .pipe(minifycss())
        .pipe(rename((path) => path.extname = '.wxss'))
        .pipe(gulp.dest('./dist'));
});
gulp.task('cp_json', function () {
    return gulp.src([
            './src/**/*.json',
            '!project.config.json'
        ])
        .pipe(jsonminify())
        .pipe(gulp.dest('./dist'))
});
gulp.task('cp_js', function () {
    return gulp.src(['./src/**/*.js', '!./src/config.js', '!./src/assets/data/**/*.js'])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
});
//watch
gulp.task('wt_scss', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer([
            'iOS >= 8',
            'Android >= 4.1'
        ]))
        .pipe(rename((path) => path.extname = '.wxss'))
        .pipe(gulp.dest('./src'));
});
gulp.task('watchHandle', function () {
    gulp.watch('./src/**/*.scss', function () {
        runSequence('wt_scss');
    });
});
