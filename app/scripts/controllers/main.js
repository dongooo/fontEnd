'use strict';

/**
 * @ngdoc function
 * @name fontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fontEndApp
 */
angular.module('jkApp')
	.controller('welcome', function ($scope, DataService) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma',
			'xjn',
			'wdf'
		];
		DataService.get("test", function (data) {
			console.log("=>>>>", data.name);
		})
	});
