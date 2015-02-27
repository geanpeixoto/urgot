/**
 * DataService Factory
 * @namespace Services
 */
(function () {
    'use strict';

    angular.module('urApplication')
        .factory('dataService', dataService);

    /**
     * @namespace dataservice
     * @memberOf Services
     * @desc Obtém um promise contendo todas as radiografias
     *
     * @ngInject
     */
    function dataService($http) {
        var request = $http.get('/data.json');

        return {
            getData: getResultData,
            getGroups: getGroups
        };

        function getResultData() {
            return request.then(function (result) {
                return result.data;
            });
        }

        function getGroups() {
            return request.then(function (result) {
                return result.data.items;
            });
        }
    }
})();
