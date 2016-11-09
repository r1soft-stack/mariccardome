/**
 * Created by riccardomasetti on 31/10/16.
 * Manage the admin toolbar (nav bar) only
 */
(function () {

    'use strict';

    angular.module('MariccardomeApp')
        .controller('NavbarAdminController',
            [
                '$scope',
                function ($scope) {
                    $scope.currentNavItem = 'dashboard';

                    $scope.$on('Navbar',function (context, data) {
                        $scope.currentNavItem = data;
                    });

                }
            ])
}());
