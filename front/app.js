'use strict';

angular.module('WA', ['ui.router',
                      'wa.LandingModule.controller',
                      'wa.WorkLogModule.controller',
                      'wa.AccountModule.controller',
                      'wa.UserUtility'])
.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
function($locationProvider, $stateProvider, $urlRouterProvider) {
  var authenticationResolve = ['userUtility', '$state', function(userUtility, $state) {
    if (!userUtility.user) {
      $state.go('home');
    }
  }];

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'html/landing.html',
      controller: 'LandingController'
    })
    .state('workLog', {
      url: '/workLog',
      templateUrl: 'html/workLog.html',
      controller: 'WorkLogController'
    })
    .state('account', {
      url: '/account',
      templateUrl: 'html/account.html',
      controller: 'AccountController',
      resolve: {
        authenticationResolve: authenticationResolve
      }
    })

  $urlRouterProvider.otherwise('home');
}]);
