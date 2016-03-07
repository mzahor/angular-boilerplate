import angular from 'angular';
import 'restangular';
import 'lodash';

// angular modules
import constants from './constants';
import onConfig from './on_config';
import onRun from './on_run';
import 'angular-ui-router';

import './templates';
import './movies';

// create and bootstrap application
const requires = [
    // 3rd party modules
    'ui.router',
    'restangular',
    // compiled html templates
    'templates',
    // feature modules
    'app.movies',
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
    strictDi: true
});
