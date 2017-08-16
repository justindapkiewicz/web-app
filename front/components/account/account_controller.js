angular.module('wa.AccountModule.controller',[])
.controller('AccountController', ['$scope', 'userUtility', '$state',
function($scope, userUtility, $state) {
  'use strict';

  $scope.id = userUtility.user.id;

  // User Logout ///////////////////////////////////////////////

  $scope.logout = function() {
    userUtility.logout();
    $state.go('home');
  };

}]);