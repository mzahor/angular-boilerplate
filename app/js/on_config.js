function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, RestangularProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('movies', {
            url: '/movies',
            template: '<movies-view></movies-view>',
            title: 'Movies',
        });

    $urlRouterProvider.otherwise('/movies');

    RestangularProvider.setBaseUrl('/api/');
}

export default OnConfig;
