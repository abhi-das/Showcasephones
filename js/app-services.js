'use strict';

var phServs = angular.module("phServ",["ngResource"]);

phServs.factory("PhoneDetailSer", ["$resource", function($resource){

	// OPTION - 1
	/*return $resource('data/phones/:phoneId.json',
	{
		stripTrailSlashes: false,
		isArray: false		
	},
	{
		query: {
			method: 'GET',
			params: {
				phoneId: 'phones'
			},
			isArray: true
		}
	});*/
	
	//OPTION - 2	
	return $resource('data/phones/:phoneId.json',
	{
		stripTrailSlashes: false,
		isArray: false		
	});
	
	//OPTION - 3 - Custom method to use http request
	/*
	return $resource('data/phones/:phoneId.json',
	{
		stripTrailSlashes: false,
		isArray: false		
	},{
		helloNewMethod: {
			method: 'GET',
			params: {
				phoneId: 'phones'
			},
			isArray: true
		}
	});
	*/		
	
}]);