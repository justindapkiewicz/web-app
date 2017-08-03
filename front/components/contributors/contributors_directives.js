angular.module('wa.ContributorsModule.directives', [])
.directive("contributorsDirective",
[
function(){
  'use strict';

  function linkingFunction(scope, element, attrs){
  scope.element = element;
  }

  function controller($scope, $location){

    $scope.contributors = [
      {
        "name": "neil brodeur",
        "info": "Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!",
        "imgSrc": "assets/landing/aboutus.png"
      }, {
        "name": "susan brodeur",
        "info": "Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!",
        "imgSrc": "assets/landing/aboutus.png"
      }, {
        "name": "tuck brodeur",
        "info": "Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!",
        "imgSrc": "assets/landing/aboutus.png"
      }, {
        "name": "justin dapkiewicz",
        "info": "Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!",
        "imgSrc": "assets/landing/aboutus.png"
      }, {
        "name": "laura dapkiewicz",
        "info": "Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!",
        "imgSrc": "assets/landing/aboutus.png"
      }, {
        "name": "benjamin dapkiewicz",
        "info": "Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!",
        "imgSrc": "assets/landing/aboutus.png"
      }, {
        "name": "jared dapkiewicz",
        "info": "Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!",
        "imgSrc": "assets/landing/aboutus.png"
      }, {
        "name": "debbie watson",
        "info": "Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!",
        "imgSrc": "assets/landing/aboutus.png"
      }, {
        "name": "sherlock holmes",
        "info": "Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!",
        "imgSrc": "assets/landing/aboutus.png"
      }, {
        "name": "derrik zoolander",
        "info": "Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!",
        "imgSrc": "assets/landing/aboutus.png"
      }, {
        "name": "michael vick",
        "info": "Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!",
        "imgSrc": "assets/landing/aboutus.png"
      }, {
        "name": "bill murray",
        "info": "Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!",
        "imgSrc": "assets/landing/aboutus.png"
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
    templateUrl: "html/contributors.html",
    link: linkingFunction
  };
}]);