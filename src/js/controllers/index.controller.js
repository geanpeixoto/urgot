/**
 * @namespace Controller
 */
(function() {
    'use strict';

    angular.module('urApplication')
        .controller('IndexController', IndexController);

    /**
     * @namespace IndexController
     * @memberOf Controller
     * @desc Controlador de pesquisa
     * @ngInject
     */
    function IndexController ($routeParams, dataService) {
        var that = this;

        constructor();

        function constructor() {
            dataService.getGroups().then(function(items) {
                that.items = items;
            });
        }
    }
})();
