'use strict';

import config from '../config';
import gulp from 'gulp';
import browserSync from 'browser-sync';
import merge from 'merge-stream';
import templateCache from 'gulp-angular-templatecache';

// Views task
gulp.task('views', ['clean'], function() {

    // Put our index.html in the dist folder
    const indexFile = gulp.src(config.views.index)
        .pipe(gulp.dest(config.buildDir));

    const views = gulp.src(config.views.src)
        .pipe(templateCache({
            standalone: true
        }))
        .pipe(gulp.dest(config.views.dest))
        .pipe(browserSync.stream());

    return merge(indexFile, views);

});
