'use strict';

import config from '../config';
import testServer from '../util/testServer';
import express from 'express';
import gulp from 'gulp';

gulp.task('testServer', function(cb) {

    testServer({
        port: config.browserPort + 3,
        dir: config.buildDir
    }).then((server) => {
        console.log('Running');
    });

});
