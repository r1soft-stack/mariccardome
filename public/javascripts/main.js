/**
 * Include dependency on 'ngMaterial' here
 */
angular.module('MariccardomeApp', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria'])
    .controller('AdminController', function ($scope) {
        $scope.showHints = true;

        $scope.user = {
            name: "",
            email: "",
            social: "123456789",
            phone: "N/A"
        };
    });
