/**
 *@description 自定义表格
 *@creattime 2014/12/1 9:31
 *@author wangdongfen<www.github.com/cookmen>
 *@dataformat NONE
 *@usage ANY
 */

'use strict';
angular.module('jkApp')
	.factory('dataSet', function () {
		/*		return test;*/
		return{
			'name': 'tom',
			'age': function () {
				return '23';
			}
		}
	})
	.controller('gridCtrl', ['$scope', 'dataSet', function ($scope, dataSet) {
		console.log('1==', dataSet.age());
	}])
