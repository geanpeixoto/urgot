(function () {
    'use strict';

    angular.module('urApplication')
        .config(configure);

    /**
     * @namespace routes
     * @desc Configura as rotas da aplicação
     * @ngInject
     */
    function configure($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'IndexController',
                controllerAs: 'index',
                templateUrl: 'view/index.html'
            })
            .when('/:groupAlias/:itemAlias', {
                controller: 'ItemController',
                controllerAs: 'item',
                templateUrl: 'view/item.html'
            })
            .when('/pesquisa', {
                controller: 'SearchController',
                templateUrl: 'view/search.html'
            });
    }
})();
