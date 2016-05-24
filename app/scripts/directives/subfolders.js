'use strict';

/**
 * @ngdoc directive
 * @name devsenseApp.directive:subFolders
 * @description
 * # subFolders
 */
angular.module('devsenseApp')
  .directive('subFolders', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the subFolders directive');
      }
    };
  });
