var ViewCtr = function ($scope, contatos, $routeParams) {
    $scope.contato = contatos.get($routeParams.id);
}