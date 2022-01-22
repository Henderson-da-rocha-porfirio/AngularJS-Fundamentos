var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  $scope.photo = {url: "https://cdn.pixabay.com/photo/2022/01/13/14/02/mother-6935336_960_720.jpg",
                  date:"13 de Janeiro, 2022."}
})

app.directive('photo', function() {
  return {
    restrict: 'E',

    template: '<figure><img width="500px"/><figcaption/></figure>',
    replace: true,

    link: function(scope, element, attrs) {
      attrs.$observe('caption', function(value) {
        element.find('figcaption').text(value)
      })

      attrs.$observe('photoSrc', function(value) {
        element.find('img').attr('src', value)
      })
    }
  }
})

// app.directive('photo', function() {
//     return {
//         restrict: 'E',
//         templateUrl: "photo.html",
//         replace: true,
//         scope: {
//             caption: '@',
//             photoSrc: '@'
//         }
//     }
// })