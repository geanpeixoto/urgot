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
            var dom = element.dom();
            var style = dom.style;
            var parent = dom.parentNode;

            dom.addEventListener('wheel', onWheel);

            function onWheel(event) {
                var width = dom.clientWidth;
                var height = dom.clientHeight;

                // Posição do mouse dentro do imagem
                var ex = event.layerX;
                var ey = event.layerY;

                // Posição do mouse dentro da viewport
                var mx = ex + dom.offsetLeft;
                var my = ey + dom.offsetTop;

                // Posição relativa do mouse dentro da imagem
                var rx = ex / width;
                var ry = ey / height;

                // Taxa de incremento
                var step = 0.10 * Math.sign(event.deltaX - event.deltaY);

                // Novo tamanho do objeto
                style.width = toPixel((1+step)*width);
                style.height = toPixel((1+step)*height);

                // Nova posição do objeto
                style.left = toPixel(mx - dom.clientWidth*rx);
                style.top = toPixel(my - dom.clientHeight*ry);
            }
        }

        function toPixel(value) {
            return parseInt(value) + 'px';
        }

    }
})();
