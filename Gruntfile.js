'use strict';

module.exports = function(grunt) {
    // Imports
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Config
    grunt.initConfig({
        clean: ['dist'],
        babel: {
            options: {
                modules: 'amd',
                stage: 4
            },
            dist: {
                files: [{
                    'expand': true,
                    'cwd': 'src/',
                    'src': ['**/*.js'],
                    'dest': 'dist/',
                    'ext': '.js'
                }]
            }
        },
        watch: {
            scripts: {
                files: 'src/**/*.js',
                tasks: ['default']
            }
        }
    });

    // Tasks
    grunt.registerTask('default', [
        'clean',
        'babel'
    ]);
};