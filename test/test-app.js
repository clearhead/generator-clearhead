/*jshint mocha:true*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('clearhead:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
        idx: '1',
        name: 'bar',
        analytics: 'google-tag-manager.js',
        plan: 'http://www.example.com/plan.pdf',
        author: 'dev@clearhead.me'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'exp-1-bar/global.js',
      'exp-1-bar/global.css',
      'exp-1-bar/control.js',
      'exp-1-bar/variation.js',
    ]);
  });
});
