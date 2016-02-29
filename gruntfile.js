module.exports = function(grunt) {
	grunt.initConfig({
   		uglify: {
   			js: {
   				src: 'src/autoselectto.js',
   				dest: 'builds/autoselectto.min.js'
   			},
   		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

 	grunt.registerTask('default', ['uglify']);
}