/**
 * Created by riccardomasetti on 31/10/16.
 */

(function () {

    'use strict';

    angular.module('MariccardomeApp')
        .component('pageEdit',{
                templateUrl: bacco.admin_view_path + '/pageEdit.html',
                controller: ['$routeParams', PageEditController]
            }
        )
        .controller('PagesController',
            [
                '$scope', '$rootScope', 'pagesService', '$location',
                function ($scope, $rootScope, pagesService, $location) {

                    $rootScope.$broadcast('Section', 'Pages');
                    $rootScope.$broadcast('Navbar', 'pages');

                    $scope.bulk = {};

                    //get pages with pagination and limit per page. Default is page 1
                    pagesService.getList({page: 1, per_page: 30});

                    $scope.$on('pages', function (context, data) {
                        $scope.pageCollection = data;
                    });

                    /**
                     *
                     * @param page_data
                     */
                    $scope.edit = function (event, pageData) {
                        var location = $location.url();
                        location = location + '/edit/' + pageData._id;
                        $location.path(location);

                        //TODO interaction with pageServices
                    }

                    /**
                     *
                     * @param page_data
                     */
                    $scope.delete = function (page_data) {
                        //TODO interaction with pageServices
                    }

                }]);

    /**
     * Edit controller for page
     * @constructor
     */
    function PageEditController($scope, $element, $attrs, $routeParams) {
        this.id = $scope.id;
    }

}());
