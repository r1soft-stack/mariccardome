/**
 * Created by riccardomasetti on 31/10/16.
 */

(function(){

    'use strict';

    angular.module('MariccardomeApp')
        .controller('AdminController', ['$scope', '$mdToast', 'adminService', function ($scope, $mdToast, adminService) {
            $scope.showHints = true;

            $scope.user = {
                name: "",
                email: "",
                social: "",
                phone: ""
            };

            /**
             * Do login
             * @param loginForm
             */
            $scope.login = function (loginForm) {
                var res = adminService.login(loginForm);

                if(res) {
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('Login Toast!')
                            .position('top right')
                            .hideDelay(3000)
                    );
                }
            }
        }]);
}());
