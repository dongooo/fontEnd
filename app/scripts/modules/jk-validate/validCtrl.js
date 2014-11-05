/**
 *@description 针对于验证页面的js，纯属demo
 *@creattime 2014/10/29 15:35
 *@author wangdongfen<www.github.com/cookmen>
 *@dataformat NONE
 *@usage ANY
 */

"use strict";
angular.module("jkApp")
	.controller("validCtrl", ["$scope", function ($scope, w5cValidator) {
		$scope.entity = {
			"name": "",
			"password": "",
			"repeatPassword": "",
			"number": "",
			"url": "",
			"group": ""
		}

		$scope.saveForm = function () {
			alert("pass success")
		}
		$scope.cancelForm = function () {
			var ele = $("#form")[0];
			w5cValidator.removeError(ele);
		}
	}]);
