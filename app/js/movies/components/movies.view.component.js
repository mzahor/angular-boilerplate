function MoviesViewComponent() {

    return {
        restrict: 'E',
        template: `
            <div class="movies-view-component">
              <movie ng-foreach="movie in movies"></movie>
            </div>
        `,
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
