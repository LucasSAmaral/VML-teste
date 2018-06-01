module.exports = function(grunt) {

    "use strict"

    grunt.initConfig({


        watch: {
            options: {
                livereload: true
            },
            
            sass: {
                files: "**/*.scss",
                tasks: "sass"
            },
            html: {
                files: "**/*.html"
            },
        },

        sass: {
            dist: {
                files: {
                    "css/App.css": "src/scss/style.scss"
                }
            }
        },

        

    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-sass");

    grunt.registerTask("dev", ["watch"]);

};