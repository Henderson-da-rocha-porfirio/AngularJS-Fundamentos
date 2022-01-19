var app = angular.module('app', []);

app.controller('MainController', function ($scope) {
    $scope.mydata = { arr: [{ name: "joao", age: 34 }, { name: "Filipo", age: 54 }, { name: "Marco", age: 14 }, { name: "Brigite", age: 87 }] }

    /* console.log($filter('uppercase')('make this string uppercase!')) */
})

/* app.filter('charlimit', function () {
    return function(input, length) {
        if (!length) {
            length = 10
        }
        if (!input) {
            return ''
        }
        if (input.length <= length) {
            return input
        } else {
            return input.substring(0, length) + '...'
        }
    }
}) */

app.filter('podeBeber', function () {
    return function (data, idadeMinima) {
        var filtered = [];
        if (!idadeMinima) {
            idadeMinima = 21
        }
        for (var i = 0; i < data.length; i++) {
            var value = data[i];
            if (value.age >= idadeMinima) {
                filtered.push(value);
            }
        }

        return filtered;

    }
})
