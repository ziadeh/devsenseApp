'use strict';

/**
 * @ngdoc function
 * @name devsenseApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the devsenseApp
 */
angular.module('devsenseApp')
  .controller('HomeCtrl', function ($scope, $route, api) {
 
    var url = api.apiUrl('/');

    url.then(function(data) {
      $scope.folders = data.data;
      console.log($scope.folders);
    });

  $scope.isActive = false;
  $scope.activeRoot = function() {
    $scope.isActive = !$scope.isActive;
  }  

    $scope.open = function(item) {
      //console.log($scope.item);
      // if(type == 0) {
      //   var url = api.apiUrl('/'+label);
      //   url.then(function(data) {
      //     $scope.folders = data.data;
      //   });
      // }
      // if(type == 1) {

      // }
    }
  });
