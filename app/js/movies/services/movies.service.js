function MoviesServiceRegistrator() {
    return MoviesService;

    function MoviesService(Restangular) {
        'ngInject';

        var service = {
            getMovies    
        };

        const movies = Restangular.all('movies');

        function getMovies() {
            return movies.getList().then(function(response) {
                return response;
            });
        }

        return service;
    }
}

export default {
    name: 'MoviesService',
    type: 'service',
    fn: MoviesServiceRegistrator,
}
