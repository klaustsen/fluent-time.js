/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'fluent-time.js', '<simplemocha:all.src>']
    },
    simplemocha: {
      all: {
        src: 'spec/**/*.js',
        options: {
          globals: ['should'],
          timeout: 3000,
          ignoreLeaks: false,
          ui: 'bdd',
          reporter: 'tap'
        }
      }
    },
    watch: {
      files: ['spec/**/*.js', 'fluent-time.js'],
      tasks:'lint simplemocha'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true
      },
      globals: {
        window: true,
        module: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-simple-mocha');

  // Default task.
  grunt.registerTask('default', 'lint simplemocha watch');

};