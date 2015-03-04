/**
 * DataService Factory
 * @namespace Services
 */
(function () {
    'use strict';

    angular.module('urApplication')
        .factory('dataService', dataService);

    /**
     * @namespace dataservice
     * @memberOf Services
     * @desc Obtém um promise contendo todas as radiografias
     *
     * @ngInject
     */
    function dataService($http) {
        var groups;

        constructor();

        return {
            getItem: getItem,
            getGroups: getGroups
        };

        function constructor() {
            groups = $http.get('/data.json').then(function(result) {
                var data = result.data.items;

                for ( var i in data ) {
                    var group = data[i];

                    for ( var j in group.items ) {
                        var item = group.items[j];

                        var width = item.width;
                        var height = item.height;


                        for ( var k in item.items ) {
                            var label = item.items[k];
                            label.x = ((label.x/width) * 100) + '%';
                            label.y = ((label.y/height) * 100) + '%';
                        }
                        item.group = group;
                    }
                }

                return data;
            });
        }

        function getItem(groupAlias, itemAlias) {
            return groups.then(function(groups) {
                for ( var i in groups ) {
                    var group = groups[i];

                    if (group.alias === groupAlias ) {
                        for ( var j in group.items ) {
                            var item = group.items[j];
                            if ( item.alias === itemAlias) {
                                return item;
                            }
                        }
                    }
                }

                return null;
            });
        }

        function getGroups() {
            return groups;
        }
    }
})();
