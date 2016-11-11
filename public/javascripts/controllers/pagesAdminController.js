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

                    pagesService.getList(1);

                    $scope.$on('pages',function(context, data){
                        $scope.pageCollection = data;
                    });

                }]);
}());
