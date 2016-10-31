/**
 * Created by riccardomasetti on 31/10/16.
 */

(function(){

    'use strict';

    angular.module('MariccardomeApp')
        .controller('AdminController', function ($scope) {
            $scope.showHints = true;

            $scope.user = {
                name: "",
                email: "",
                social: "",
                phone: ""
            };
        });
}());
