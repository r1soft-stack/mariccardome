/**
 * Created by riccardomasetti on 31/10/16.
 */

(function() {

    'use strict';

    angular.module('MariccardomeApp')
        .factory('adminService', function($cookies){

            var loginStatus = false;
            var credentials = {};

            /**
             *
             */
            function login(loginForm) {
                loginStatus = true;
                $cookies.put('logsession','1');
                $cookies.put('userEmail',userForm.email);
                $cookies.put('userName',userForm.name);
                angular.extend(credentials,userForm);

                return credentials;
            }

            /**
             *
             */
            function logout() {

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
        });
}());
