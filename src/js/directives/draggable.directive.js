/**
 * @namespace Directive
 */
(function () {
    'use strict';

    angular.module('urApplication')
        .directive('urDraggable', urDraggable);

    /**
     * @namespace urDraggable
     * @memberOf Directive
     * @desc
     *
     * @ngInject
     */
    function urDraggable() {

        return {
            restrict: 'EA',
            link: link
        };

        function link(scope, element, attrs) {
            var dom = element.dom();
            var style = dom.style;
            var parent = dom.parentNode;
            var initial;
            var painting = false;

            dom.addEventListener('mousedown', onMouseDown);
            dom.addEventListener('mouseup', stop);
            parent.addEventListener('mouseleave', stop);

            function onMouseMove(event) {
                var left = initial.left + (event.x - initial.offsetX);
                var top = initial.top + (event.y - initial.offsetY);

                style.left = toPixel(left);
                style.top = toPixel(top);
            }

            function onMouseDown(event) {
                parent.addEventListener('mousemove', onMouseMove);

                initial = {
                    left: dom.offsetLeft,
                    top: dom.offsetTop,
                    offsetX: event.x,
                    offsetY: event.y
                };
            }

            function stop() {
                parent.removeEventListener('mousemove', onMouseMove);
                initial = null;
            }
        }

        function toPixel(value) {
            return parseInt(value) + 'px';
        }
    }
})();
