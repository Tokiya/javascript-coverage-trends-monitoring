gulp    = require 'gulp'
$       = require('gulp-load-plugins')()
{shell} = require 'execa'

parallel = (tasks) -> gulp.parallel.apply gulp, tasks
series = (tasks) -> gulp.series.apply gulp, tasks

gulp.task 'build:pug', ->
    gulp.src 'src/**/*.pug'
        .pipe $.pug()
        .pipe gulp.dest 'dist'

gulp.task 'build:sass', ->
	gulp.src 'src/**/*.scss'
		.pipe $.postcss([
			require('precss')(import: extension: 'scss')
		])
		.pipe $.rename (x) -> x.extname = '.css'
        .pipe gulp.dest 'dist'

gulp.task 'copy:js', ->
    gulp.src 'src/**/*.+(js|json)'
        .pipe gulp.dest 'dist'

gulp.task 'copy:css', ->
    gulp.src 'src/**/*.css'
        .pipe gulp.dest 'dist'

gulp.task 'copy:images', ->
    gulp.src 'src/**/*.+(jpg|png)'
        .pipe gulp.dest 'dist'

gulp.task 'copy', parallel [
        'copy:js'
        'copy:css'
        'copy:images'
        # 'copy:fonts'
    ]

gulp.task 'build', parallel [
    'build:pug'
    'build:sass'
    'copy'
    ]

gulp.task 'watch', ->
    gulp.watch 'src/**/*.+(js|json)', parallel ['copy:js']
    gulp.watch 'src/**/*.css',        parallel ['copy:css']
    gulp.watch 'src/**/*.pug',        parallel ['build:pug']
    gulp.watch 'src/**/*.scss',       parallel ['build:sass']

gulp.task 'hotel:init', ->
    shell 'hotel add "npm run dev"'

gulp.task 'hotel:remove', ->
    shell 'hotel rm'