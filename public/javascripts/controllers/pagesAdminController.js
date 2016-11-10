/**
 * Created by riccardomasetti on 31/10/16.
 */

(function () {

    'use strict';

    angular.module('MariccardomeApp')
        .controller('PagesController',
            [
                '$scope', '$rootScope', 'pagesService',
                function ($scope, $rootScope, pagesService) {

                    $rootScope.$broadcast('Section', 'Pages');
                    $rootScope.$broadcast('Navbar', 'pages');

                    $scope.pageCollection = pagesService.getList(1);

                }]);
}());
