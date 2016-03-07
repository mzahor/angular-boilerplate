'use strict';

import config from '../config';
import url from 'url';
import browserSync from 'browser-sync';
import gulp from 'gulp';
import proxyMiddleware from 'http-proxy-middleware';

gulp.task('browserSync', function() {

    const DEFAULT_FILE = 'index.html';
    const ASSET_EXTENSION_REGEX = new RegExp(`\\b(?!\\?)\\.(${config.assetExtensions.join('|')})\\b(?!\\.)`, 'i');

    var proxy = proxyMiddleware('/api', {
        target: 'http://localhost:3003/',
        changeOrigin: false   // for vhosted sites, changes host header to match to target's host
    });

    browserSync.init({
        server: {
            baseDir: config.buildDir,
            middleware: [
                proxy,
                function(req, res, next) {
                    let fileHref = url.parse(req.url).href;

                    if (!ASSET_EXTENSION_REGEX.test(fileHref)) {
                        req.url = '/' + DEFAULT_FILE;
                    }

                    return next();
                }, 
            ],
        },
        port: config.browserPort,
        ui: {
            port: config.UIPort
        },
        ghostMode: {
            links: false
        }
    });

});
