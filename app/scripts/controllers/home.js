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
  });
