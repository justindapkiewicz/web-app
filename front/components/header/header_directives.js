angular.module('wa.HeaderModule.directives', [])
.directive('headerDirective', ['userUtility', '$state', function(userUtility, $state) {
  function linkingFunction(scope, element, attrs) {
    scope.element = element;
  }

  function controller($scope) {

    $scope.user = userUtility.user;

    // User Logout ///////////////////////////////////////////////

    $scope.logout = function() {
      userUtility.logout();
      $state.go('home');
    };

    $scope.$on("$destroy", function() {
      $scope.element = null;
    });
  }

  controller.$inject = ["$scope"];
  return {
    restrict: "E",
    replace: true,
    transclude: false,
    controller: controller,
    scope: {},
    templateUrl: "html/header.html",
    link: linkingFunction
  }
}]);