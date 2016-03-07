/* global module */

'use strict';

describe('Unit: MoviesComponent', function() {

    let element;
    let scope;

    beforeEach(function() {
        angular.mock.module('app.movies');

        angular.mock.inject(($compile, $rootScope) => {
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

});
