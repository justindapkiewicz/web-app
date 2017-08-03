'use strict';

angular.module('WA',
                [ 'ngRoute',
                  'wa.LandingModule.controller',
                  'wa.HeaderModule.directives',
                  'wa.FooterModule.directives',
                  'wa.LinksModule.directives',
                  'wa.AboutModule.controller',
                  'wa.ApplyModule.controller',
                  'wa.TestimonialsModule.controller',
                  'wa.ContactModule.controller',
                  'wa.MapModule.controller',
                  'wa.ContributorsModule.directives'])
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
    .when('/apply', {
      templateUrl: 'html/apply.html',
      controller: 'ApplyController'
    })
    .when('/testimonials', {
      templateUrl: 'html/testimonials.html',
      controller: 'TestimonialsController'
    })
    .when('/contact', {
      templateUrl: 'html/contact.html',
      controller: 'ContactController'
    })
    .when('/map', {
      templateUrl: 'html/map.html',
      controller: 'MapController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
