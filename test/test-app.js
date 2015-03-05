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
        client: 'foo',
        name: 'exp-1-bar',
        idx: '1',
        analytics: 'google-tag-manager.js',
        plan: 'http://www.example.com',
        author: 'dev@clearhead.me'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'foo/exp-1-bar/global.js',
      'foo/exp-1-bar/global.css',
      'foo/exp-1-bar/control.js',
      'foo/exp-1-bar/variation.js',
    ]);
  });
});
