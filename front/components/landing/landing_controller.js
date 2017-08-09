angular.module('wa.LandingModule.controller', ['AjaxModule', 'ngCookies'])
.controller('LandingController', ['$scope', 'ajaxUtil', '$cookies', '$location', function($scope, ajaxUtil, $cookies, $location) {
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
    $cookies.CSIuuid = data;
    $location.path('/account');
  };

  $scope.onLoginError = function(err) {
    console.log(err);
  };
}]);
