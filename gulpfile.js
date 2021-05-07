const { src, dest, watch, series } = require('gulp');
const through = require('through2');
const { exec } = require('child_process');
const browserSync = require('browser-sync').create();

/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
function jinja() {
  return through.obj((file, _, callback) => {
    return exec(`jinja2 ${file.path} config.json`, (error, stdout) => {
      if (error) return callback(error, null);
      file.extname = '.html';
      file.contents = Buffer.from(stdout);
      return callback(null, file);
    });
  });
}

function less() {
  return through.obj((file, _, callback) => {
    exec(`lessc ${file.path}`, (error, stdout) => {
      if (error) return callback(error, null);
      file.extname = '.css';
      file.contents = Buffer.from(stdout);
      callback(null, file);
    });
  });
}

function templates(done) {
  return src('templates/*.html')
    .pipe(jinja())
    .pipe(dest('dist'))
    .on('end', done);
}

function styles(done) {
  return src('templates/*.less')
    .pipe(less())
    .pipe(dest('dist'))
    .on('end', done);
}

function reload(done) {
  browserSync.reload();
  done();
}

function serve() {
  browserSync.init({ 
    server: "./dist",
    ui: false,
    serveStatic: [{
      route: '/static',
      dir: './static'
    }]    
  });
  watch(['templates/**/*.html', 'config.json'], series(templates, reload));
  watch('templates/**/*.less', series(styles, reload));
}

exports.templates = templates;
exports.styles = styles;
exports.build = series(templates, styles, serve);
