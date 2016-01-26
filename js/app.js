"use strict";

var phoneApp = angular.module("phApp",["ngRoute","ngResource","appCtrl","phServ"]);

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
				redirectTo: "/phones"
			})
	}
]);