'use strict';

var appCtrls = angular.module("appCtrl",[]);

appCtrls.controller("PhoneListCtrl",["$scope", "PhoneDetailSer", function($scope, PhSer){
	
	/* console.log("phone list controller init..."); */
	
	
	/*$scope.phones = [
		{
			'name': 'Nexus S',
			'id': 'nexus-s',
			'img': 'img/phones/nexus-s.0.jpg',
			'snippet': 'Fast just got faster with Nexus S.',
			'age': 1
		},
		{
			'name': 'Motorola XOOM with Wi-Fi',
			'id': 'motorola-xoom-with-wi-fi',
			'img': 'img/phones/motorola-xoom-with-wi-fi.0.jpg',
			'snippet': 'The Next, Next Generation tablet.',
			'age': 4
		},
		{
			'name': 'MOTOROLA XOOM',
			'id': 'motorola-xoom',
			'img': 'img/phones/motorola-xoom.0.jpg',
			'snippet': 'The Next, Next Generation tablet.',
			'age': 2
		}
	];*/
	
	//OPTION - 1 - See example in app-services.js
	//$scope.phones = PhSer.query();
	
	//OPTION - 2 - See example in app-services.js
	$scope.phones = PhSer.query({
		phoneId: 'phones',
		isArray: true
	});
	
	//OPTION - 3	
	//$scope.phones = PhSer.helloNewMethod();
	
	$scope.orderProp = 'age';
	
	//console.log( $scope.phones );
	
	
}]);

appCtrls.controller("PhoneDetailCtrl",["$scope", "$http", "PhoneDetailSer" ,"$routeParams", function($scope, $http, PhoneDetailSer, $routeParams){
	
	console.log("phone detail controller init...");
	$scope.phone = null;
	
	/*$http.get('data/phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
	  console.log( $scope.phone );
    });*/
	
	
	/*$http({
		url: 'data/phones/' + $routeParams.phoneId + '.json',
		method: 'GET'
	}).success(function(res){
		console.log(res);
		$scope.phone = res;
	}).error(function(err){
		console.log(err);
	});*/
	
	PhoneDetailSer.get({phoneId: $routeParams.phoneId}, function(dt){
		//console.log(dt);
		$scope.phone = dt;
	});

	
}]);