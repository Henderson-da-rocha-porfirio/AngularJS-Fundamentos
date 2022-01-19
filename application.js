var app = angular.module('app', []);

app.controller('MainController', function ($scope) {
    $scope.mydata = {arr: [{name:"joao",age:34},{name:"Filipo",age:54},{name:"Marco",age:14},{name:"Brigite",age:87}]}

    /* console.log($filter('uppercase')('make this string uppercase!')) */
})
