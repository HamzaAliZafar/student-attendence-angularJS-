'use strict';

 /* Controllers */
 
 var phonecatControllers = angular.module('phonecatControllers', []);

 
 
phonecatControllers.controller('PhoneListCtrl', ['$scope', '$routeParams', '$http',
 function($scope, $routeParams, $http) {
  $http.get('view.json').success(function(data) {
    $scope.views = data;
  });
 
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('phones.json').success(function(data) {
	$scope.phones = data;
	});
	
	var today = new Date();
  $scope.date =  today.toDateString();
  $scope.orderProp = 'name';
	
  $scope.save = function(index, chkMonitor) {
		
	if(!chkMonitor){
		$scope.phones[index].Attendance -= 1;
	}
	else{
		$scope.phones[index].Attendance += 1;
	}
	$http.post('phones.json', $scope.phones).then(function(data) {
		$scope.msg = 'Data saved' + JSON.stringify($scope.phones);
	});
  }; 
}]);


