angular.module('wa.DashboardModule.controller',[])
.controller('DashboardController', ['$scope', '$location', 'userUtility', '$state', '$window', '$timeout', '$rootScope',
function($scope, $location, userUtility, $state, $window, $timeout, $rootScope) {
  'use strict';

  $scope.arrow = 'glyphicon-triangle-top';
  $scope.menuTabs = [
    {
      "tab": "Service Ticket",
      "value": "Service Ticket",
      "state": "dashboard.serviceTicket"
    }, {
      "tab": "Changeover Inspection Report",
      "value": "Changeover Inspection Report",
      "state": "dashboard.changeoverInspectionReport"
    }
  ];

  $scope.toggleNav = function() {
    var myEl = angular.element(document.querySelector('#site-wrapper'));
    myEl.toggleClass('show-nav');
    $scope.arrow = myEl.hasClass('show-nav') ? 'glyphicon-triangle-bottom' : 'glyphicon-triangle-top';
  };

  $rootScope.$on('$stateChangeStart', function(event, toState, toParms, fromState, fromParms) {
    console.log("this should be called");
    if (toState.name === "dashboard.main") {
      console.log("picu");
      $scope.toggleNav();
    }
  });

  $timeout(function() {
    if ($state.current.name === "dashboard.main") {
      $scope.toggleNav();
    }
    console.log("timeout");
  });

  $scope.getRemainingHeight = function() {
    return ($window.innerHeight - 196) + 'px';
  };

  angular.element($window).bind('resize', function() {
    $scope.$apply();
  });

  $scope.init = function() {
    if ($state.current.name === 'dashboard') {
      //$state.go('dashboard.main');
    }
  };
  
  $scope.init();
}]);