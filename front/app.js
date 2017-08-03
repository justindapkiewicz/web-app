'use strict';

angular.module('WA',
                [ 'ngRoute',
                  'wa.LandingModule.controller',
                  'wa.HeaderModule.directives',
                  'wa.FooterModule.directives',
                  'wa.LinksModule.directives',
                  'wa.AboutModule.controller',
                  'wa.ContactModule.controller'])
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
    .otherwise({
      redirectTo: '/'
    });
}]);
