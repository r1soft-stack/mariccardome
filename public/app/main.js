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
                .when('/dashboard', {
                    controller: 'DashboardController',
                    templateUrl: bacco.admin_view_path + '/dashboard.html'
                })
                .when('/pages', {
                    controller: 'PagesController',
                    templateUrl: bacco.admin_view_path + '/pages.html'
                })
                .when('/users', {
                    controller: 'UserController',
                    templateUrl: bacco.admin_view_path + '/users.html'
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
