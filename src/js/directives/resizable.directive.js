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
            element.on({
                'wheel': onWheel
            });

            function onWheel(jEvent) {
                var event = jEvent.originalEvent;
                var width = element.width();
                var height = element.height();
                var step = 0.10 * Math.sign(event.deltaX - event.deltaY);

                element.width(width + step * width);
                element.height(height + step * height);
            }
        }

    }
})();
