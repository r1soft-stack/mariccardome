/**
 * Created by riccardomasetti on 31/10/16.
 */

(function () {

    'use strict';

    angular.module('MariccardomeApp')
        .controller('UserController',
            [
                '$scope', '$mdToast', '$window', '$rootScope',
                function ($scope, $mdToast, $window, $rootScope) {

                    $rootScope.$broadcast('Section', 'Users');
                    $rootScope.$broadcast('Navbar', 'users');

                    $scope.people = [
                        { name: 'Janet Perkins', img: 'https://placeholdit.imgix.net/~text?txtsize=20&txt=100%C3%97100&w=100&h=100', newMessage: true },
                        { name: 'Mary Johnson', img: 'https://placeholdit.imgix.net/~text?txtsize=20&txt=100%C3%97100&w=100&h=100', newMessage: false },
                        { name: 'Peter Carlsson', img: 'https://placeholdit.imgix.net/~text?txtsize=20&txt=100%C3%97100&w=100&h=100', newMessage: false }
                    ];

                    $scope.goToPerson = function(person, event) {
                        $mdDialog.show(
                            $mdDialog.alert()
                                .title('Navigating')
                                .textContent('Inspect ' + person)
                                .ariaLabel('Person inspect demo')
                                .ok('Neat!')
                                .targetEvent(event)
                        );
                    };

                    $scope.navigateTo = function(to, event) {
                        $mdDialog.show(
                            $mdDialog.alert()
                                .title('Navigating')
                                .textContent('Imagine being taken to ' + to)
                                .ariaLabel('Navigation demo')
                                .ok('Neat!')
                                .targetEvent(event)
                        );
                    };

                    $scope.doPrimaryAction = function(event) {
                        $mdDialog.show(
                            $mdDialog.alert()
                                .title('Primary Action')
                                .textContent('Primary actions can be used for one click actions')
                                .ariaLabel('Primary click demo')
                                .ok('Awesome!')
                                .targetEvent(event)
                        );
                    };

                    $scope.doSecondaryAction = function(event) {
                        $mdDialog.show(
                            $mdDialog.alert()
                                .title('Secondary Action')
                                .textContent('Secondary actions can be used for one click actions')
                                .ariaLabel('Secondary click demo')
                                .ok('Neat!')
                                .targetEvent(event)
                        );
                    };
                }]);
}());
