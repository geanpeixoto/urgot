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
     * @desc
     *
     * @ngInject
     */
    function urOnload() {
        return {
            restrict: 'A',
            link: link
        };

        function link(scope, element, attrs) {
            element.bind('load', function () {
                scope.$apply(attrs.urOnload);
            });
        }
    }
})();
