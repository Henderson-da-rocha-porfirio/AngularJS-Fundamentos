var app = angular.module('app', []);

app.controller('MainController', function ($scope) {
    $scope.photo = {
        url: "https://cdn.pixabay.com/photo/2022/01/13/14/02/mother-6935336_960_720.jpg",
        date: "13 de Janeiro, 2022."
    }

    $scope.callme = function (msg) {
        console.log('Você me deu: ' + msg)
    }
})

app.directive('photo', function () {
    return {
        restrict: 'E',
        templateUrl: "photo.html",
        replace: true,
        scope: {
            caption: '@capstring',
            // O '@capstring' está aceitando dados dentro da string passada em: Mother - Imagem carregada no Pixabay em: {{photo.date}}
            // A 'string' é tratada dentro do dado interpolado ({{}})
            // 'caption' está presente no escopo da diretiva
            // Quando 'caption' é escrita com o scope da diretiva, isso não sobrescreve o scope pai. Contudo, a photo (origem) que está vinculada a instância de photo pai será sobrescrita.
            photoSrc: '=', // '=' pega a ligação do que for passado para ele como uma string e continua essa ligação no escopo da diretiva
            localFunc: '&' // '&' 'e comercial'(ampersand em inglês) significa que você quer passar uma expressão do alto nível(controller pai) para o nível baixo(nível da diretiva) por isso o controller abaixo.
        },
        controller: function ($scope) { //Uma diretiva controller para atribuir dados ao scope. Isso funciona conforme a explicação acima sobre o '&'. E usa a injeção de dependência($scope)
            $scope.mydata = "some data"
        }
    }
})