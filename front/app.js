'use strict';

angular.module('WA',
                [ 'ngRoute',
                  'wa.LandingModule.controller',
                  'wa.HeaderModule.directives',
                  'wa.FooterModule.directives',
                  'wa.LinksModule.directives',
                  'wa.AboutModule.controller',
                  'wa.ContactModule.controller',
                  'wa.LoginModule.controller',
                  'wa.ListsModule.controller',
                  'wa.WorkLogModule.controller',
                  'wa.AccountModule.controller'])
.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'html/landing.html',
      controller: 'LandingController'
    })
    .when('/about', {
      templateUrl: 'html/about.html',
      controller: 'AboutController'
    })
    .when('/contact', {
      templateUrl: 'html/contact.html',
      controller: 'ContactController'
    })
    .when('/login', {
      templateUrl: 'html/login.html',
      controller: 'LoginController'
    })
    .when('/Lists', {
      templateUrl: 'html/lists.html',
      controller: 'ListsController'
    })
    .when('/workLog', {
      templateUrl: 'html/workLog.html',
      controller: 'WorkLogController'
    })
    .when('/account', {
      templateUrl: 'html/account.html',
      controller: 'AccountController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
