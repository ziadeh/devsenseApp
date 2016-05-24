'use strict';

/**
 * @ngdoc function
 * @name devsenseApp.controller:PictureCtrl
 * @description
 * # PictureCtrl
 * Controller of the devsenseApp
 */
angular.module('devsenseApp')
  .controller('PictureCtrl', function ($http, $scope, $location, $routeParams, api, $base64) {

    $scope.id=$routeParams.id;
    $scope.folderName = $routeParams.folder;
    $scope.pictureId = $routeParams.id;
    var thisUrl = $base64.decode($routeParams.folder);
    var url = api.apiUrl(thisUrl);
	url.then(function(data) {
		$scope.folders = data.data.data.children;
		for(var i=0; i<$scope.folders.length; i++) {
			if($scope.folders[i].label === $scope.pictureId) {
				$scope.activeImg = $scope.folders[i].url;
				$scope.imgId = $scope.folders[i].label;
				return;
			};
		}
	});

	$scope.swapImage = function(imgSrc, label) {
		$scope.activeImg = imgSrc;
		$scope.imgId = label;
	}
  });
