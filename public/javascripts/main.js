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
                .when('/admin/users-manager', {
                    template: '<md-content>Users Manager</md-content>'
                })
                .otherwise({
                    redirectTo: '/annotator'
                });
        }]);

}());
