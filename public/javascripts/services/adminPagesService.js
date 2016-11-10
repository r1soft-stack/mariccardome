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

                var verb = '//' + $window.location.host + init_config.admin_api_verb;

                var AdminApi = $resource(verb, {},
                    {
                        getList: {
                            method: 'POST',
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
                        $rootScope.$broadcast('pages', res);
                    }, function (error) {
                        // Check for errors
                        return error.toJSON();
                    });
                }

                return {
                    getList: getList
                }
            }]);
}());