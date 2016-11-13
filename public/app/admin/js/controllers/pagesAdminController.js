/**
 * Created by riccardomasetti on 31/10/16.
 */

(function () {

    'use strict';

    angular.module('MariccardomeApp')
        .component('pageEdit',{
                templateUrl: bacco.admin_view_path + '/pageEdit.html',
                controller: PageEditController
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
    function PageEditController($scope, $element, $attrs, $routeParams, pagesService) {
        var ctrl = this;
        ctrl.id = $routeParams.id;
        ctrl.tinymceModel = 'Initial content';

        pagesService.getPage({pageid:ctrl.id});
        $scope.$on('pages:page', function (context, data) {
            var page = data.length > 0 ? data[0] : false;
            ctrl.tinymceModel = page.content;
        });

        ctrl.getContent = function() {
            console.log('Editor content:', ctrl.tinymceModel);
        };

        ctrl.setContent = function() {
            ctrl.tinymceModel = 'Time: ' + (new Date());
        };

        ctrl.tinymceOptions = {
            plugins: 'link image code',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        };
    }

}());
