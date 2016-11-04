/**
 * Created by riccardomasetti on 31/10/16.
 */

(function () {

    'use strict';

    angular.module('MariccardomeApp')
        .factory('adminService', [
            '$cookies', '$resource', '$window', '$rootScope',
            function ($cookies, $resource, $window, $rootScope) {

            var loginStatus = false;
            var credentials = {};
            var verb = '//' + $window.location.host + '/admin/api';

            var AdminApi = $resource(verb, {},
                {
                    getinfo: {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'}
                    },
                    login: {
                        method: 'POST',
                        url: verb + '/login',
                        headers: {'Content-Type': 'application/json'}
                    },
                    logout: {
                        method: 'POST',
                        url: verb + '/logout',
                        headers: {'Content-Type': 'application/json'}
                    }
                });

            /**
             * Do login
             * @param loginForm
             * @returns {*}
             */
            function login(loginForm) {
                return AdminApi.login(loginForm).$promise.then(function (results) {
                    var res = results.toJSON();
                    if (res.redirect) {
                        loginStatus = true;
                        $rootScope.$broadcast('login', res);
                    } else {
                        $rootScope.$broadcast('login', {redirect:'/'});
                    }
                }, function (error) {
                    // Check for errors
                    loginStatus = false;
                    return error.toJSON();
                });
            }

            /**
             * Do logout
             * @returns {*}
             */
            function logout() {
                return AdminApi.logout().$promise.then(function (results) {
                    var res = results.toJSON();
                    if (res.redirect) {
                        loginStatus = false;
                        $rootScope.$broadcast('logout', res);
                    } else {
                        $rootScope.$broadcast('login', {redirect:'/'});
                    }
                }, function (error) {
                    // Check for errors
                    loginStatus = false;
                    return error.toJSON();
                });
            }

            /**
             *
             */
            function getLoginStatus() {

            }

            /**
             *
             */
            function getUserData() {

            }

            return {
                login: login,
                logout: logout,
                getLoginStatus: getLoginStatus,
                getUserData: getUserData
            }
        }]);
}());
