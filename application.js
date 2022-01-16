var app = angular.module('app', []); // controllers foi injetado como parametro para ser recebido no modulo abaixo.
/* var app = angular.module('app', ['controllers']); // controllers foi injetado como parametro para ser recebido no modulo abaixo. */

/* var MainController = function ($scope) {
    $scope.val = "testes" */
    /* $scope.func = function () {
        return "123" + "456"
    }     
} */

/* var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  $scope.val = 1
  $scope.even = false

  $scope.inc = function() {
    $scope.val += 1
    $scope.even = $scope.val%2==0
  }
}) */

var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  // $scope.myarr = [1,2,3,4,5,5,6,7,8,9]

  // $scope.users = [{name:"mike",age:23},{name:"andy",age:34},{name:"reid",age:45},{name:"reid",age:45}]

  $scope.ob = {name: "mike", age:35, title:"Mr."}
})


   