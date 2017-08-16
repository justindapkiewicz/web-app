angular.module('wa.AccountModule.controller',['ngCookies'])
.controller('AccountController', ['$scope', '$cookies', 'userUtility', '$state',
function($scope, $cookies, userUtility, $state) {
  'use strict';

  $scope.id = userUtility.user.id;

  // User Logout ///////////////////////////////////////////////

  $scope.logout = function() {
    userUtility.logout();
    $state.go('home');
  };

}]);