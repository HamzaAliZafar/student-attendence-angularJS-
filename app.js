'use strict';

/* App Module */

var phonecatApp = angular.module('MyApp', [
  'ngRoute',
  'phonecatControllers'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/assignment', {
        templateUrl: 'view.html',
        controller: 'PhoneListCtrl'
      }).
      when('/assignment/Probability & Statistics', {
        templateUrl: 'data.html',
        controller: 'PhoneDetailCtrl'
      }).
	   when('/assignment/Comp Arch & Org', {
        templateUrl: 'cao.html',
        controller: 'PhoneDetailCtrl'
      }).
	   when('/assignment/Web Engg', {
        templateUrl: 'web.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/assignment'
      });
  }]);
