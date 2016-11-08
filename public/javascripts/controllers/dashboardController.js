/**
 * Created by riccardomasetti on 31/10/16.
 */

(function () {

    'use strict';

    angular.module('MariccardomeApp')
        .controller('DashboardController',
            [
                '$scope', '$mdToast', '$window', '$rootScope',
                function ($scope, $mdToast, $window, $rootScope) {
                    $rootScope.$broadcast('Section', 'Dashboard');
                }]);
}());
