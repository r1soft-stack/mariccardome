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

                    $scope.bulk = {};

                    //get pages with pagination and limit per page. Default is page 1
                    pagesService.getList({page:1 , per_page:30});

                    $scope.$on('pages', function(context, data){
                        $scope.pageCollection = data;
                    });

                    /**
                     *
                     * @param page_data
                     */
                    $scope.edit = function (page_data) {

                        //pagesService.edit(page_data);
                    }

                    /**
                     *
                     * @param page_data
                     */
                    $scope.delete = function (page_data) {

                    }

                }]);
}());
