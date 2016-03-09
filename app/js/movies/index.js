import angular from 'angular';
import * as _ from 'lodash';
var bulk = require('bulk-require');

const moviesModule = angular.module(
    'app.movies', [
        'templates',
        'restangular',
    ]);

export default moviesModule;

var components = bulk(__dirname + '/components', [
    '**/*.component.js',
]);

var services = bulk(__dirname + '/services', [
    '**/*.service.js',
]);

var directives = bulk(__dirname + '/directives', [
    '**/*.directive.js',
]);

var filters = bulk(__dirname + '/filters', [
    '**/*.filter.js',
]);

function register(obj) {
    moviesModule[obj.type](obj.name, obj.fn());
}

[
    ..._.values(components),
    ..._.values(directives),
    ..._.values(services),
    ..._.values(filters),
].forEach(x => register(x.default));

