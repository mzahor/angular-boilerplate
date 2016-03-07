function MovieComponent() {

    return {
        restrict: 'E',
        template: `
            <div class="movie-component">
              <h3>{{$ctrl.movie.name}}</h3>
              <div class="rate-yes">{{$ctr.movie.rateYes}}</div>
              <div class="rate-no">{{$ctr.movie.rateNo}}</div>
            </div>
        `,
        bindings: {
            movie: '<'
        },
        controller: MovieComponentController
    };

    function MovieComponentController() {
        // var ctrl = this;
    }
}

export default {
    name: 'movie',
    type: 'component',
    fn: MovieComponent
};
