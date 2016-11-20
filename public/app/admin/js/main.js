/**
 * Include dependency on 'ngMaterial' here
 */


(function(){

    'use strict';

    var MariccardomeApp = angular.module('MariccardomeApp',
        ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria', 'ngCookies', 'ngRoute', 'ngResource', 'material.svgAssetsCache', 'ui.tinymce']);

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
                .when('/pages/edit/:id', {
                    template: '<page-edit></page-edit>'
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
                .iconSet('alert', 'img/icons/sets/alert-icons.svg', 24)
                .defaultIconSet('img/icons/sets/core-icons.svg', 24)
                .icon('share-arrow', 'img/icons/share-arrow.svg', 24)
                .icon('upload', 'img/icons/upload.svg', 24)
                .icon('copy', 'img/icons/copy.svg', 24)
                .icon('print', 'img/icons/print.svg', 24)
                .icon('hangout', 'img/icons/hangout.svg', 24)
                .icon('mail', 'img/icons/mail.svg', 24)
                .icon('message', 'img/icons/message.svg', 24)
                .icon('copy2', 'img/icons/copy2.svg', 24)
                .icon('facebook', 'img/icons/facebook.svg', 24)
                .icon('twitter', 'img/icons/twitter.svg', 24);
        }]);

}());
