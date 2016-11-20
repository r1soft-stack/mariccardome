/**
 * Created by riccardomasetti on 31/10/16.
 */

(function () {

    'use strict';

    angular.module('MariccardomeApp')
        .component('pageEdit', {
                templateUrl: bacco.admin_view_path + '/pageEdit.html',
                controller: PageEditController
            }
        )
        .controller('GridBottomSheetCtrl', GridBottomSheetCtrl)
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
    function PageEditController($scope, $element, $attrs, $routeParams, pagesService, $mdBottomSheet, $mdToast) {
        $scope.id = $routeParams.id;
        $scope.tinymceModel = 'Initial content';

        $scope.getContent = function () {
            console.log('Editor content:', $scope.tinymceModel);
        };

        $scope.setContent = function () {
            $scope.tinymceModel = 'Time: ' + (new Date());
        };

        $scope.tinymceOptions = {
            plugins: 'link image code template fullscreen',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code template fullscreen',
            skin: 'bacco'
        };

        $scope.showMenu = function () {
            $mdBottomSheet.show({
                templateUrl: bacco.admin_view_path + '/pageOptions.html',
                controller: 'GridBottomSheetCtrl',
                clickOutsideToClose: false
            }).then(function (clickedItem) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent(clickedItem['name'] + ' clicked!')
                        .position('top right')
                        .hideDelay(1500)
                );
            });
        }

        //get page content
        pagesService.getPage({pageid: $scope.id});

        //listen on page service getPag
        $scope.$on('pages:page', function (context, data) {
            var page = data.length > 0 ? data[0] : false;
            $scope.tinymceModel = page.content;
            $scope.page = page;
        });
    }

    function GridBottomSheetCtrl($scope, $mdBottomSheet) {
        $scope.items = [
            { name: 'Hangout', icon: 'hangout' },
            { name: 'Mail', icon: 'mail' },
            { name: 'Message', icon: 'message' },
            { name: 'Copy', icon: 'copy2' },
            { name: 'Facebook', icon: 'facebook' },
            { name: 'Twitter', icon: 'twitter' },
        ];

        $scope.listItemClick = function($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    }

}());
