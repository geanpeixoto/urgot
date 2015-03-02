/**
 * @namespace Directive
 */
(function () {
    'use strict';

    angular.module('urApplication')
        .directive('urResizable', urResizable);

    /**
     * @namespace urResizable
     * @memberOf Directive
     * @desc
     *
     * @ngInject
     */
    function urResizable() {

        return {
            restrict: 'EA',
            link: link
        };

        function link(scope, element, attrs) {
            element.on('wheel', onWheel);

            function onWheel(event) {
                var direction = Math.sign(event.deltaX - event.deltaY);

                console.log(element.width, element.height, element);
                console.log('urResizable:onWheel', direction);
            }
        }

    }
})();
