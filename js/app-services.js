'use strict';

var phServs = angular.module("phServ",["ngResource"]);

phServs.factory("PhoneDetailSer", ["$resource", function($resource){

	return $resource('data/phones/:phId'+'.json', 
	{
		stripTrailingSlashes: false,
		isArray: false
	});


}]);