(function() {
    'use strict';

    angular.module('urApplication', ['ngRoute'])
        .run(createJQLitePlugins);

    function createJQLitePlugins() {
        var JQLite = angular.element;

        /**
         * Obtém o DOMElement de um objeto JQLite
         */
        JQLite.prototype.dom = function() {
            var that = this;

            if ( that.length === 1 )
                return that[0];
            else
                throw new RangeError();
        };
    }
})();
