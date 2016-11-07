/**
 * Include dependency on 'ngMaterial' here
 */


(function(){

    'use strict';

    var MariccardomeApp = angular.module('MariccardomeApp',
        ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria', 'ngCookies', 'ngRoute', 'ngResource']);

    MariccardomeApp.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/users', {
                    templateUrl: init_config.view_path + '/admin/users.html'
                })
                .when('/dashboard', {
                    templateUrl: init_config.view_path + '/admin/dashboard.html'
                })
                .otherwise({
                    redirectTo: '/dashboard'
                });
        }]);

}());
