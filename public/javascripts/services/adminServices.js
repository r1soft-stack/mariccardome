/**
 * Created by riccardomasetti on 31/10/16.
 */

(function() {

    'use strict';

    angular.module('MariccardomeApp')
        .factory('admin', admin);

    function admin($cookies){

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
            Notification.success('You are now logged in');
        }

        /**
         *
         */
        function logout() {
            
        }

        /**
         *
         */
        function loginStatus() {
            
        }

        /**
         *
         */
        function userData() {

        }
    }

});
