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
            .when('/radiografia/:groupAlias/:radiographAlias', {
                controller: 'RadiographController',
                templateUrl: 'view/radiograph.html'
            })
            .when('/pesquisa', {
                controller: 'SearchController',
                templateUrl: 'view/search.html'
            });
    }
})();
