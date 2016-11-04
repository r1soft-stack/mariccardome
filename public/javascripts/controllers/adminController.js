/**
 * Created by riccardomasetti on 31/10/16.
 */

(function () {

    'use strict';

    angular.module('MariccardomeApp')
        .controller('AdminController',
            [
                '$scope', '$mdToast', 'adminService', '$window',
                function ($scope, $mdToast, adminService, $window) {
                    $scope.showHints = true;

                    $scope.user = {};

                    /**
                     * Do login
                     * @param loginForm
                     */
                    $scope.login = function (loginForm) {
                        adminService.login(loginForm);

                        $scope.$on('login', function (context, res) {
                            if (res) {
                                $mdToast.show(
                                    $mdToast.simple()
                                        .textContent('Login success!')
                                        .position('top right')
                                        .hideDelay(3000)
                                );

                                if (res.redirect) {
                                    $window.location = res.redirect;
                                }
                            }
                        })

                    }

                    /**
                     * Do logout
                     */
                    $scope.logout = function () {

                        adminService.logout();

                        $scope.$on('logout', function (context, res) {
                            if (res) {
                                $mdToast.show(
                                    $mdToast.simple()
                                        .textContent('Logged out!')
                                        .position('top right')
                                        .hideDelay(3000)
                                );

                                if (res.redirect) {
                                    $window.location = res.redirect;
                                }
                            }
                        });
                    }

                }]);
}());
