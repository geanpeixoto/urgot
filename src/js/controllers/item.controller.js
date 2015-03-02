/**
 * @namespace Controller
 */
(function() {
    'use strict';

    angular.module('urApplication')
        .controller('ItemController', ItemController);

    /**
     * @namespace SearchController
     * @memberOf Controller
     * @desc Controlador de pesquisa
     * @ngInject
     */
    function ItemController ($routeParams, dataService) {
        var that = this;

        constructor();

        function constructor() {
            dataService.getItem($routeParams.groupAlias, $routeParams.itemAlias).then(function(item) {
                that.data = item;
            });
        }
    }
})();
