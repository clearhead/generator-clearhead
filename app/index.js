'use strict';
var fs = require('fs');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

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
      message: 'Client Folder?',
      choices: getDirectories('./')
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
      type: 'input',
      name: 'author',
      message: 'Author?',
      validate: function (input) {
        return !!input;
      }
    }];

    this.prompt(prompts, function (props) {
      conf = {
        name: props.name,
        idx: props.idx,
        plan: props.plan,
        author: props.author
      };
      this.slug = props.client + '/' + props.name + '/';

      done();
    }.bind(this));
  },

  writing: {
    globals: function () {
      this.fs.copyTpl(
        this.templatePath('global.css'),
        this.destinationPath(this.slug + 'global.css'),
        conf
      );
      this.fs.copy(
        this.templatePath('global.js'),
        this.destinationPath(this.slug + 'global.js'),
        conf
      );
    },

    variations: function () {
      this.fs.copy(
        this.templatePath('control.js'),
        this.destinationPath(this.slug + 'control.js'),
        conf
      );
      this.fs.copy(
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
  }
});

function getDirectories(srcpath) {
  var fs = require('fs'),
    path = require('path');
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  }).filter(function (dir){
    return !/^(\.git|test|node_modules|bower_components|app)$/.test(dir)
  });
}
