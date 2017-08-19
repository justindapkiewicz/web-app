'use strict';

angular.module('WA', ['ui.router',
                      'wa.UserUtility',
                      'wa.LandingModule.controller',
                      'wa.WorkLogModule.controller',
                      'wa.HeaderModule.directives',
                      'wa.Dashboard'])
.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
function($locationProvider, $stateProvider, $urlRouterProvider,) {
  var authenticationResolve = ['userUtility', '$q', function(userUtility, $q) {
    var deferred = $q.defer();
    if (!userUtility.user) {
      return deferred.reject({state: 'home'});
    }

    return deferred.resolve({});
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
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'html/dashboard.html',
      controller: 'DashboardController',
      resolve: {
        authenticationResolve: authenticationResolve
      }
    })
    .state('dashboard.main', {
      url: '/main',
      templateUrl: 'html/main.html',
      controller: 'MainController'
    })
    .state('dashboard.serviceTicket', {
      url: '/serviceTicket',
      templateUrl: 'html/serviceTicket.html',
      controller: 'ServiceTicketController'
    })
    .state('dashboard.changeoverInspectionReport', {
      url: '/changeoverInspectionReport',
      templateUrl: 'html/changeoverInspectionReport.html',
      controller: 'ChangeoverInspectionReportController'
    })

  $urlRouterProvider.otherwise('home');

  $locationProvider.hashPrefix('');
}])
.run(['$rootScope', function($rootScope) {
  $rootScope.$on('$stateChangeError', function(event, to, toParams, from, fromParams, error) {
    if (error.state) {
      $state.go(error.state);
    } else {
      console.log('Error redirecting');
    }
  });
}]);