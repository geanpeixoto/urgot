/**
 * @namespace Directive
 */
(function () {
    'use strict';

    angular.module('urApplication')
        .directive('urItem', urItem);

    /**
     * @namespace urItem
     * @memberOf Directive
     * @desc
     *
     * @ngInject
     */
    function urItem() {
        return {
            restrict: 'E',
            transclude: true,
            link: link,
            scope: {
                src: "@"
            },
            template: '<img ng-src={{src}} /><ng-transclude></ng-transclude>'
        };

        function link(scope, element, attrs) {
            var maxZoom = 2;
            var dom = element.dom();
            var style = dom.style;
            var parent = dom.parentNode;
            var image = dom.querySelector('img');

            image.addEventListener('load', onImageLoad);

            function onImageLoad(event) {
                var maxWidth = parent.clientWidth;
                var maxHeight = parent.clientHeight;

                var width = image.naturalWidth;
                var height = image.naturalHeight;

                var dx = maxWidth/width;
                var dy = maxHeight/height;
                var ratio = dx < dy ? dx : dy;

                style.maxWidth = Math.ceil(width*maxZoom) + 'px';
                style.maxHeight = Math.ceil(height*maxZoom) + 'px';
                style.width = dom.style.minWidth = (width = Math.ceil(width*ratio))+'px';
                style.height = dom.style.minHeight = (height = Math.ceil(height*ratio))+'px';
                style.top = Math.ceil((maxHeight-height)/2) + 'px';
                style.left = Math.ceil((maxWidth-width)/2) + 'px';
            }
        }
    }
})();
