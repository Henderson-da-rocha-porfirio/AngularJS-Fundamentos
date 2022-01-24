var app = angular.module("myApp", [
  "ngRoute",
  "ngAnimate",
  ]);
  
  
  
  app.config(function($routeProvider, $locationProvider) {
  
    $routeProvider.
      when("/first-page", {
        templateUrl: "first-page.html",
        animate: "slideup"
      }).
      when("/second-page", {
        templateUrl: "second-page.html",
        animate: "slideup"
      }).
      otherwise({
        redirectTo: "/first-page"
      });
  
  });
  
  app.controller("MyCtrl", function($scope) {
  
  });
  
  // PAGE ANIMATE DIRECTIVE
  app.directive('animClass',function($route){
    return {
      link: function(scope, elm, attrs){
        var enterClass = $route.current.animate;
        elm.addClass(enterClass)
        scope.$on('$destroy',function(){
          elm.removeClass(enterClass)
          elm.addClass($route.current.animate)
        })
       }
    }
  });
  
  // PARALLAX DIRECTIVE
  app.directive('parallaxBackground', ['$window', function($window) {
    return {
      restrict: 'A',
      transclude: true,
      template: '<div ng-transclude></div>',
      scope: {
        parallaxRatio: '@',
      },
      link: function($scope, elem, attrs) {
        var setPosition = function () {
          var calcValY = (elem.prop('offsetTop') - $window.pageYOffset) * ($scope.parallaxRatio ? $scope.parallaxRatio : 1.1 );
          // horizontal positioning
          elem.css('background-position', "50% " + calcValY + "px");
         };
  
        // set our initial position - fixes webkit background render bug
        angular.element($window).bind('load', function(e) {
          setPosition();
          $scope.$apply();
        });
  
        angular.element($window).bind("scroll", setPosition);
        angular.element($window).bind("touchmove", setPosition);
      }  // link function
    };
  }]);