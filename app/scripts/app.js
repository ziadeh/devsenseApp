'use strict';

/**
 * @ngdoc overview
 * @name devsenseApp
 * @description
 * # devsenseApp
 *
 * Main module of the application.
 */
angular
  .module('devsenseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'config',
    'base64'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/picture/:folder', {
        templateUrl: 'views/picture.html',
        controller: 'PictureCtrl',
        controllerAs: 'picture'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }
   
  );
