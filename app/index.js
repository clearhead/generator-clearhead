'use strict';
var fs = require('fs');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var UglifyJS = require('uglify-js');
var latestVersion = require('latest-version');
var cowsay = require('cowsay');
var conf;

module.exports = yeoman.generators.Base.extend({
  constructor: function() {
    yeoman.generators.Base.apply(this, arguments);
    this.option('skip-update-check');
    this.skipUpdate = (this.options['skip-update-check'] ? true : false);
  },

  initializing: function() {

    this.pkg = require('../package.json');

    var done = this.async();

    latestVersion('generator-clearhead', function(err, version) {
      if (this.skipUpdate || this.pkg.version === version) {
        done();
      } else {
        console.log(cowsay.say({
          text: 'Please update using `npm update -g generator-clearhead`\n' +
            ' or run again using the `--skip-update-check` flag'
        }));
        process.exit(1);
      }
    }.bind(this));
  },

  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('Clearhead') + ' generator!'
    ));

    var idx;
    var prompts = [{
      type: 'input',
      name: 'idx',
      message: 'exp-{{int}}-slug',
      validate: function(input) {
        return /^\d+$/.test(idx = input);
      }
    }, {
      type: 'input',
      name: 'name',
      message: function() {
        return 'exp-' + idx + '-{{slug}}';
      },
      validate: function(input) {
        return /^[a-z0-9-]+$/.test(input);
      }
    }, {
      type: 'input',
      name: 'plan',
      message: 'Test Plan Link? (optional)'
    }, {
      type: 'list',
      name: 'analytics',
      message: 'Analytics?',
      choices: getFiles(__dirname + '/templates/analytics/'),
      validate: function(input) {
        return !!input;
      }
    }, {
      type: 'input',
      name: 'author',
      message: 'Author?',
      validate: function(input) {
        return !!input;
      }
    }];

    this.prompt(prompts, function(props) {

      conf = {
        name: 'exp-' + props.idx + '-' + props.name,
        idx: props.idx,
        plan: props.plan,
        author: props.author,
        analytics: props.analytics,
        baseFileName: (__dirname + '/templates/base.js'),
      };
      this.slug = conf.name + '/';

      done();
    }.bind(this));
  },

  writing: {
    globals: function() {
      conf.base = fs.readFileSync(conf.baseFileName).toString();
      conf.base = this.engine(conf.base, conf); // compile base
      conf.base = UglifyJS.minify(conf.base, {
        fromString: true,
        output: {
          comments: true
        }
      }).code;
      var analyticsName = conf.analytics;
      var analytics = fs.readFileSync(__dirname + '/templates/analytics/' + analyticsName).toString();
      analytics = this.engine(analytics, conf);
      analytics = UglifyJS.minify(analytics, {
        fromString: true,
        /*output: {comments:true}*/
      }).code;
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

    variations: function() {
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

  install: function() {
    this.installDependencies({
      skipInstall: true
    });
  },

  end: function() {
    this.log(yosay(
      'Generated!'
    ));
  }
});

/*jshint latedef:false*/
function getFiles(srcpath) {
  return fs.readdirSync(srcpath);
}
