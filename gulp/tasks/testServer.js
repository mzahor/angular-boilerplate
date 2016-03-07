import config from '../config';
import testServer from '../util/testServer';
import express from 'express';
import gulp from 'gulp';

gulp.task('testServer', function(cb) {

    testServer({
        port: config.testServer.port,
        dir: config.buildDir,
        logger: true,
    }).then((server) => {
        console.log(`Running test server at: http://localhost:${config.testServer.port}`);
    });

});
