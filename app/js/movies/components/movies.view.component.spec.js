/* global module */

'use strict';

describe('Unit: MoviesViewComponent', function() {

    let element;
    let scope;

    beforeEach(function() {
        angular.mock.module('app.movies');

        angular.mock.inject(($compile, $rootScope, _MoviesService_, $q) => {
            let movies = [
                {name: 'Superman'},
                {name: 'Ironman'},
            ]; 
            spyOn(_MoviesService_, 'getMovies').and.returnValue($q.when(movies));

            scope = $rootScope;
            let jElement = angular.element(
                '<movies-view></movies-view>'
            );

            $compile(jElement)(scope);
            scope.$digest();
            element = jElement[0];
        });
    });

    it('should render template', function() {
        expect(element.querySelector('.movies-view-component')).not.toBe(null);
    });

    it('should render movies', function() {
        let movieComponents = element.querySelectorAll('.movie-component');
        expect(movieComponents).not.toBe(null);
        expect(movieComponents.length).toBe(2);
    });

    it('should render movie names', function() {
        // we need this test to check parent->child bindings
        // there is no need to check all other propreties
        let movieComponent = element.querySelector('.movie-component');
        expect(movieComponent.innerHTML).toContain('Superman');
    });

});
