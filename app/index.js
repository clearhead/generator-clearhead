'use strict';
var fs = require('fs');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var UglifyJS = require('uglify-js');

var updateNotifier = require('update-notifier');
var pkg = require('../package.json');
var notify = updateNotifier({pkg: pkg});

var conf;
module.exports = yeoman.generators.Base.extend({

  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the cat\'s pajamas ' + chalk.red('Clearhead') + ' generator!'
    ));

    var prompts = [{
      type: 'rawlist',
      name: 'client',
      message: 'Client (Folder)?',
      choices: getDirectories('./'),
      validate: function () {
        return true;
      }
    },{
      type: 'input',
      name: 'name',
      message: 'What is the experiment name? (e.g., exp-X-foobar)',
      validate: function (input) {
        return !!input;
      }
    },{
      type: 'input',
      name: 'idx',
      message: 'What is the exp idx? (e.g., 10)',
      validate: function (input) {
        return !!input;
      }
    },{
      type: 'input',
      name: 'plan',
      message: 'Test Plan Link?',
      validate: function (input) {
        return !!input;
      }
    },{
      type: 'list',
      name: 'analytics',
      message: 'Analytics?',
      choices: getFiles(__dirname + '/templates/analytics/'),
      validate: function (input) {
        return !!input;
      }
    },{
      type: 'input',
      name: 'author',
      message: 'Author?',
      validate: function (input) {
        return !!input;
      }
    }];

    this.prompt(prompts, function (props) {

      notify.notify();

      conf = {
        name: props.name,
        idx: props.idx,
        plan: props.plan,
        author: props.author,
        analytics: props.analytics,
        baseFileName: (__dirname + '/templates/base.js'),
      };
      this.slug =
        (props.client ? props.client + '/' : '') +
        (props.name ? props.name + '/' : '');

      done();
    }.bind(this));
  },

  writing: {
    globals: function () {
      conf.base = fs.readFileSync(conf.baseFileName).toString();
      conf.base = this.engine(conf.base, conf); // compile base
      conf.base = UglifyJS.minify(conf.base, { fromString: true,
        output: {comments:true} }).code;
      var analyticsName = conf.analytics;
      var analytics = fs.readFileSync(__dirname + '/templates/analytics/' + analyticsName).toString();
      analytics = this.engine(analytics, conf);
      analytics = UglifyJS.minify(analytics, { fromString: true,
        /*output: {comments:true}*/ }).code;
      analytics = '// ' + analyticsName + '\n' + analytics;
      conf.analytics = analytics;
      this.fs.copyTpl(
        this.templatePath('global.css'),
        this.destinationPath(this.slug + 'global.css'),
        conf
      );
      this.fs.copyTpl(
        this.templatePath('global.js'),
        this.destinationPath(this.slug + 'global.js'),
        conf
      );
    },

    variations: function () {
      this.fs.copyTpl(
        this.templatePath('control.js'),
        this.destinationPath(this.slug + 'control.js'),
        conf
      );
      this.fs.copyTpl(
        this.templatePath('variation.js'),
        this.destinationPath(this.slug + 'variation.js'),
        conf
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: true
    });
  },

  end: function () {
    this.log(yosay(
      'Thanks! ctrl+f TODO if you included any analytics.'
    ));
  }
});

/*jshint latedef:false*/
function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  }).filter(function (dir){
    return !/^(\.git|test|node_modules|bower_components|app)$/.test(dir);
  });
}

function getFiles(srcpath) {
  return fs.readdirSync(srcpath);
}
