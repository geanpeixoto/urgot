/*jshint node: true*/

'use strict';

var gulp = require('gulp'),
    preprocess = require('gulp-preprocess'),
    clean = require('gulp-clean'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    bower = require('gulp-bower'),
    ngAnnotate = require('gulp-ng-annotate'),
    minifyJS = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css');

var config = {
    dest: './www'
};

var preprocess_config = {
    context: {
        NODE_ENV: 'production',
        DEBUG: true
    }
};

/**
 * @task clean
 * Esta tarefa possui como objetivo limpar o diretório 'build'
 */
gulp.task('clean', function () {
    gulp.src(config.dest, {read: false})
        .pipe(clean());
});

/**
 * @task connect
 * Esta tarefa possui como objetivo iniciar um servidor na pasta 'build'
 */
gulp.task('preview', function () {
    connect.server({
        root: config.dest,
        port: 9000
    });
});

/**
 * @task bower:copy
 * Esta tarefal possui como objetivo copiar as bibliotecas do bower
 */
gulp.task('bower:copy', function () {
    bower()
        .pipe(gulp.dest(config.dest+ '/bower_components'));
});

/**
 * @task build
 */
gulp.task('build', ['clean', 'bower:copy', 'build:data', 'build:html', 'build:less', 'build:js']);

gulp.task('build:data', function() {
    gulp.src('./data/**')
        .pipe(gulp.dest(config.dest));
});

gulp.task('build:html', function () {
    gulp.src('./src/**/*.html')
        .pipe(preprocess(preprocess_config))
        .pipe(gulp.dest(config.dest));
});

gulp.task('build:less', function () {
    gulp.src('./src/less/styles.less')
        .pipe(preprocess(preprocess_config))
        .pipe(less())
        .pipe(gulp.dest(config.dest))
        .pipe(minifyCSS())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest(config.dest));
});

gulp.task('build:js', function () {
    gulp.src(['./src/**/*.js'])
        .pipe(preprocess(preprocess_config))
        .pipe(ngAnnotate())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(config.dest))
        .pipe(minifyJS({mangle: true}))
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest(config.dest));
});

/**
 * @task watch
 */
gulp.task('watch', function () {
    function watch(filetype) {
        gulp.watch('./src/**/*.' + filetype, ['build:' + filetype]);
    }
    watch('html');
    watch('less');
    watch('js');
    //gulp.watch('./data/**', ['build:data']);
});

/**
 * @task default
 */
gulp.task('default', ['clean', 'build', 'watch', 'preview']);
