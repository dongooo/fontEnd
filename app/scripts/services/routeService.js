/**
 * Created by yeomen on 2014/10/26.
 *  RoutesService 路由服务
 */
'use strict';

angular.module('jkApp')
	//这段代码使得$routeProvider能够在service中继续使用
	.config(function ($provide, $routeProvider) {
		$provide.factory('$routeProvider', function () {
			return $routeProvider;
		});
	})
	//基本配置
	.config(function ($routeProvider) {
		//受理
		$routeProvider.when('/', {templateUrl: 'views/welcome.html'});
		$routeProvider.when('/jkValidate', {templateUrl: 'views/jkValidate.html', controller: 'validCtrl'});
		$routeProvider.when('/jkLogin', {templateUrl: 'views/jkLogin.html'});
		$routeProvider.when('/jkDoc', {templateUrl: 'views/jkDoc.html'});
		$routeProvider.when('/jkHelp', {templateUrl: 'views/jkHelp.html'});
		$routeProvider.when('/jkTest', {templateUrl: 'views/jkTest.html'});
		$routeProvider.when('/jkGrid', {templateUrl: 'views/jkGrid.html', controller: 'gridCtrl'});
		$routeProvider.otherwise({templateUrl: 'views/404.html'});
	})

	//定义RoutesService
	.service('RoutesService', function RoutesService($routeProvider, $location, $route, DataService) {
		var _routesService = {};
		//todo 开发模式
		_routesService.isDev = location.hostname === 'localhost' || $location.search().dev;

		return _routesService;
	})

;



