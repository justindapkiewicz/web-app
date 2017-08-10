angular.module('wa.AccountModule.controller',['ngCookies', 'wa.UserUtility'])
.controller('AccountController', ['$scope', '$cookies', 'userUtility', '$location',
function($scope, $cookies, userUtility, $location) {
  'use strict';

  $scope.active = userUtility.isUser;
  $scope.activeId = userUtility.id;
  $scope.activeName = userUtility.realName;
  $scope.activeRights = userUtility.permission;

  // User Logout ///////////////////////////////////////////////

  $scope.logout = function() {
    $cookies.CSIuuid = null;
    userUtility.isUser = false;
    $location.path('/home');
  };

}]);