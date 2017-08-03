angular.module('wa.LinksModule.directives', [])
.directive("linksDirective",
[
function(){
  'use strict';

  function linkingFunction(scope, element, attrs){
  scope.element = element;
  }

  function controller($scope, $location){

    $scope.linkOptions = [
      {
        "title": "About Us",
        "description": "About Us",
        "url": "#/about"
      }, {
        "title": "Apply Now",
        "description": "Apply Now",
        "url": "#/apply"
      }, {
        "title": "Testimonials",
        "description": "Testimonials",
        "url": "#/testimonials"
      }
    ];

    $scope.$on("$destroy", function(){
      $scope.element = null;
    });
  }
  controller.$inject = ['$scope', '$location'];
  return {
    restrict: "E",
    replace: true,
    transclude: false,
    controller: controller,
    scope: {
    },
    templateUrl: "html/links.html",
    link: linkingFunction
  };
}]);