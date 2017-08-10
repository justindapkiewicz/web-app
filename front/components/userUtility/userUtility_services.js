angular.module('wa.UserUtility', [])
.factory('userUtility', function () {
	return { 
		"isUser": false,
		"id": "",
		"realName": "",
		"permission": ""
	};
});