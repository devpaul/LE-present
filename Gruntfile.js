module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-devserver');

	grunt.initConfig({
		clean: {
			resources: {
				src: [ 'resources/*.css' ]
			}
		},

		stylus: {
			resources: {
				files: {
					'resources/main.css' : 'resources/main.styl'
				}
			}
		},

		watch: {
			stylus: {
				files: 'resources/**/*.styl',
				tasks: [ 'stylus' ],
				options: {
					interrupt: true
				}
			}
		},

		devserver: {
			present: {
				options: {
					port: 8765
				}
			}
		}
	});

	grunt.registerTask('default', [
		'clean',
		'stylus'
	]);

	grunt.registerTask('dev', [
		'clean',
		'stylus',
		'watch'
	]);

	grunt.registerTask('serve', [
		'stylus',
		'devserver'
	]);
};
