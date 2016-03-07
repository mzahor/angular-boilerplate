import angular from 'angular';

const moviesModule = angular.module('app.movies', ['templates', 'restangular']);

function register(obj) {
    moviesModule[obj.type](obj.name, obj.fn());
}

import MoviesViewComponent from './components/movies.view.component';
register(MoviesViewComponent);

import MovieComponent from './components/movie.component';
register(MovieComponent);

import MoviesService from './services/movies.service';
register(MoviesService);

export default moviesModule;
