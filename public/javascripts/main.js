/**
 * Include dependency on 'ngMaterial' here
 */


(function(){

    'use strict';

    var MariccardomeApp = angular.module('MariccardomeApp',
        ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria', 'ngCookies', 'ngRoute', 'ngResource', 'material.svgAssetsCache']);

    MariccardomeApp.config(['$routeProvider', '$mdIconProvider',
        function ($routeProvider, $mdIconProvider) {
            $routeProvider
                .when('/users', {
                    controller: 'UserController',
                    templateUrl: init_config.view_path + '/admin/users.html'
                })
                .when('/dashboard', {
                    controller: 'DashboardController',
                    templateUrl: init_config.view_path + '/admin/dashboard.html'
                })
                .otherwise({
                    redirectTo: '/dashboard'
                });

            $mdIconProvider
                .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
                .iconSet('device', 'img/icons/sets/device-icons.svg', 24)
                .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24)
                .defaultIconSet('img/icons/sets/core-icons.svg', 24);
        }]);

}());
