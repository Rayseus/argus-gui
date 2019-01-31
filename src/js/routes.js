'use strict';

/**
 * Route configuration for the argus module.
 */
angular.module('argus').
    run(['Restangular',function(Restangular) {
        //BaseUrlCalculator.calculate()
        // Restangular.setBaseUrl('http://localhost:9000/');
    }]
).config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
 
        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('create', {
                url: '/create',
                templateUrl: 'templates/create/index.html'
            })
            .state('search', {
                url: '/search',
                templateUrl: 'templates/search/index.html'
            })           
            
            ;//last one
    }
]);


