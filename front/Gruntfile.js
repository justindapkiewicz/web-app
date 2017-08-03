module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  //Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      script: {
        files: [
          'components/**/*.js',
          '*.js'
        ],
        tasks: ['clean:script', 'copy:script', 'concat'],
        options: {
          livereload: true
        }
      },
      html: {
        files: [
          'components/**/*.html',
          '../server/index.html'
        ],
        tasks: ['clean:html', 'copy:html'],
        options: {
          livereload: true
        }
      },
      css: {
        files: [
          'components/**/*.scss',
          'style/**/*.scss'
        ],
        tasks: ['clean:css', 'sass', 'copy:css'],
        options: {
          livereload: true
        }
      }
    },
    clean: {
      script: [
        "static/js/",
        "static/bower_components"
      ],
      css: [
        "static/css"
      ],
      html: [
        "static/html"
      ]
    },
    copy:{
      script: {
        files: [
          {expand: true, src: ['app.js'], dest: 'static/js/', filter: 'isFile'},
          {expand: true, src: ['bower_components/**'], dest: 'static/', filter: 'isFile'}
        ]
      },
      html: {
        files: [
          {expand: true, flatten: true, src: ['components/**/*.html'], dest: 'static/html/', filter:'isFile'},
        ]
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      app: {
        files: {
          'static/css/app.css': 'style/app.scss'
        }
      }
    },
    concat: {
      controllers: {
        src: ['components/**/*_controller.js',
              'components/**/*_services.js',
              'components/**/*_directives.js',
              'components/**/*_filters.js'],
        dest: 'static/js/wa.js'
      },
      external: {
        src: ["bower_components/angular/angular.min.js",
              "bower_components/angular-animate/angular-animate.min.js",
              "bower_components/angular-cookies/angular-cookies.min.js",
              "bower_components/angular-resource/angular-resource.min.js",
              "bower_components/angular-route/angular-route.min.js",
              "bower_components/angular-sanitize/angular-sanitize.min.js",
              "bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
              "bower_components/angular-bootstrap/ui-bootstrap.min.js"
              ],
        dest: 'static/js/external.js'
      }
    },
    jshint: {
      all: ['*.js', 'components/**/*.js'],
      options: {
        jshintrc: true
      }
    },
    concurrent: {
      staticMigration: ['copy', 'concat', 'sass'],
      test: ['jshint']
    }
  });

  grunt.registerTask('test', ['concurrent:test']);
  grunt.registerTask('default', ['clean', 'concurrent:staticMigration']);
};