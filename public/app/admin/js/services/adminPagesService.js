/**
 * Created by riccardomasetti on 10/11/16.
 */

/**
 * Created by riccardomasetti on 31/10/16.
 */

(function () {

    'use strict';

    angular.module('MariccardomeApp')
        .factory('pagesService', [
            '$cookies', '$resource', '$window', '$rootScope',
            function ($cookies, $resource, $window, $rootScope) {

                var verb = '//' + $window.location.host + bacco.admin_api.pages;

                var AdminApi = $resource(verb, {},
                    {
                        getPage: {
                            method: 'POST',
                            url: verb + '/get-page',
                            headers: {'Content-Type': 'application/json'}
                        },
                        getList: {
                            method: 'GET',
                            url: verb + '/get',
                            headers: {'Content-Type': 'application/json'}
                        },
                        insert: {
                            method: 'POST',
                            url: verb + '/insert',
                            headers: {'Content-Type': 'application/json'}
                        },
                        delete: {
                            method: 'POST',
                            url: verb + '/delete',
                            headers: {'Content-Type': 'application/json'}
                        }
                    });

                /**
                 * Do login
                 * @param loginForm
                 * @returns {*}
                 */
                function getList(pagination) {
                    return AdminApi.getList(pagination).$promise.then(function (results) {
                        var res = results.toJSON();
                        $rootScope.$broadcast('pages', res.pages);
                    }, function (error) {
                        // Check for errors
                        return error.toJSON();
                    });
                }

                /**
                 * Do login
                 * @param loginForm
                 * @returns {*}
                 */
                function getPage(search) {
                    return AdminApi.getPage(search).$promise.then(function (results) {
                        var res = results.toJSON();
                        $rootScope.$broadcast('pages:page', res.pages);
                    }, function (error) {
                        // Check for errors
                        return error.toJSON();
                    });
                }

                return {
                    getList: getList,
                    getPage: getPage
                }
            }]);
}());