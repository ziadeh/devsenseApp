'use strict';

/**
 * @ngdoc service
 * @name devsenseApp.api
 * @description
 * # api
 * Service in the devsenseApp.
 */
 var param = 'folder5';
angular.module('devsenseApp')
  .service('api', function ($http, ApiConfig, $q) {
    
    this.apiUrl = function(param) {
    	var promise = $http({
          url: ApiConfig.baseUrl,
          method: 'GET',
          cache: false,
          params : {
          	path : 'root/'+param
          },
          headers: {
            'X-TOKEN': '2d4e69f4823176197ccf41caa5ee6456',
          }
        }).success(function (data, status, headers, config) {
	      return data;
	    }).
        error(function(data) {
        	console.log("error" , data);
        });
        return promise;
    }

	return {
		apiUrl : this.apiUrl
	}
  });
