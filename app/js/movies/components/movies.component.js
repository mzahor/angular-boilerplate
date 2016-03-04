function MoviesComponent() {

    return {
        restrict: 'E',
        template: `
            <div class="movies-component">
              <movie></movie>
            </div>
        `,
        controller: MoviesComponentController
    };

    function MoviesComponentController() {
        var ctrl = this;
    }
}

export default {
    name: 'movies',
    type: 'component',
    fn: MoviesComponent
};
