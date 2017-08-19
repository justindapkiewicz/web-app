angular.module('wa.LandingModule.controller', ['AjaxModule', 'ngCookies'])
.controller('LandingController', ['$scope', 'ajaxUtil', '$cookies', '$state', 'userUtility',
function($scope, ajaxUtil, $cookies, $state, userUtility) {
  'use strict';

  $scope.loginData = {
    username: "",
    password: ""
  };

  $scope.message = "";

  $scope.login = function() {
    //var loginUrl = '/login?username='+$scope.loginData.username+'&password='+$scope.loginData.password;

    //ajaxUtil.get(loginUrl, $scope, "onLogin", "onLoginError", true);
    var data = {
      username: "Test",
      realName: "Test",
      permission: "Administrator",
      sessionId: "1234-TEST-1234"
    };

    userUtility.defineUserData(data);
    $state.go('dashboard');
  };

  /*$scope.onLogin = function(data) {
    $scope.loginData = {};
    $scope.message = "";
    userUtility.defineUserData(data);
    $state.go('dashboard');
  };

  $scope.onLoginError = function(error, status) {
    $scope.loginData.password = null;

    switch (status) {
      case 404:
        $scope.message = "We cannot find an account with that ID";
        break;
      case 401:
        $scope.message = "Your password is incorrect";
        break;
      default:
        $scope.message = "We recieved an unexpected error - Please try again";
    }
  };*/
}]);
