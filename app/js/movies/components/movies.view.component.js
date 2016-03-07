function MoviesViewComponent() {

    return {
        restrict: 'E',
        templateUrl: 'movies/components/movies.view.component.html',
        controller: MoviesViewComponentController
    };

    function MoviesViewComponentController(MoviesService) {
        'ngInject';
        var ctrl = this;

        MoviesService.getMovies().then(function(movies) {
            ctrl.movies = movies;
        });
    }
}

export default {
    name: 'moviesView',
    type: 'component',
    fn: MoviesViewComponent
};
