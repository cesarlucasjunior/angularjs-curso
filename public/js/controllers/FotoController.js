angular.module('alurapic').controller('FotoController', function($scope, $http){

    //Controller associada a foto.html e receberá os dados da página e realizará o processamento necessário.
    $scope.foto= {};
    $scope.mensagem = "";

    //Método do formulário para enviar dados à API.
    $scope.submeter = function() {
        if($scope.formulario.$valid){
            $http.post('/v1/fotos', $scope.foto) //Envia para o endereço o objeto do scope.
                .success(function(){
                    $scope.foto = {};
                    $scope.mensagem = "Foto adicionada com sucesso!";
                }).error(function(){ //Caso dê errado!
                    $scope.mensagem = "Algum problema aconteceu! Tente mais tarde!";
                });
        } else {
            console.log('Algo na requisição está errado!');
        };
    };
});