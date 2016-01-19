"use strict";

var phoneApp = angular.module("phApp",["ngRoute","PhoneListCtrl","PhoneDetailCtrl"]);

phoneApp.config(["$routeProvider", 

	function($rProvider){
	
		$rProvider
			.when("/phones",{
				templateUrl: "partials/phone-list.html",
				controller: "PhoneListCtrl"
			})
			.when("/phones/:phoneId", {
				templateUrl: "partials/phone-detail.html",
				controller: "PhoneDetailCtrl"
			})
			.otherwise({
				redirestTo: "/phones"
			})
	}
]);