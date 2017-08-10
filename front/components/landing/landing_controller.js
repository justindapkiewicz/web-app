angular.module('wa.LandingModule.controller', ['AjaxModule', 'ngCookies', 'wa.UserUtility'])
.controller('LandingController', ['$scope', 'ajaxUtil', '$cookies', '$location', 'userUtility',
function($scope, ajaxUtil, $cookies, $location, userUtility) {
  'use strict';

  $scope.loginData = {
    username: "",
    password: ""
  };

  $scope.login = function() {
    ajaxUtil.get("/login?username="+$scope.loginData.username+'&password='+$scope.loginData.password, $scope, "onLogin", "onLoginError", true);
  };

  $scope.onLogin = function(data) {
    $scope.loginData = {};
    $cookies.CSIuuid = data.sessionId;
    userUtility.isUser = true;
    userUtility.id = data.username;
    userUtility.realName = data.realName;
    userUtility.permission = data.permission;
    $location.path('/account');
  };

  $scope.onLoginError = function(err) {
    console.log(err);
  };
}]);
