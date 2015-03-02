/**
 * @namespace Directive
 */
(function () {
    'use strict';

    angular.module('urApplication')
        .directive('urOnload', urOnload);

    /**
     * @namespace urOnload
     * @memberOf Directive
     * @desc Controlador das radiografias
     * @ngInject
     */
    function urOnload() {
        return {
            restrict: 'A',
            scope: {
                urOnload: '&'
            },
            link: link
        };

        function link(scope, element, attrs) {
            element.bind('load', function () {
                console.log(scope);
                scope.$apply(attrs.urOnload);
            });
        }
    }
})();
