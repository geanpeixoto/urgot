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
            var image = element.find('img');

            console.log(image.get());

//            image.bind({
//                'load': onImageLoad
//            });

            function onImageLoad(jEvent) {
                var maxWidth = element.width();
                var maxHeight = element.height();
                var naturalWidth = this.naturalWidth;
                var naturalHeight = this.naturalHeight;

                console.log(naturalHeight, naturalWidth);
            }
        }
    }
})();
