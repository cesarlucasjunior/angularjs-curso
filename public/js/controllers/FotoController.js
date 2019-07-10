angular.module('alurapic').controller('FotoController', function($scope, $http){

    //Controller associada a foto.html e receberá os dados da página e realizará o processamento necessário.
    $scope.foto = {};

    //Método do formulário para enviar dados à API.
    $scope.submeter = function() {
        if($scope.formulario.$valid){
            $http.post('v1/fotos', $scope.foto) //Envia para o endereço o objeto do scope.
                .success(function(){
                    $scope.foto = {};
                }).error(function(){ //Caso dê errado!
                    console.log("Erro!")
                });
        } else {
            console.log('Algo na requisição está errado!');
        };
    };

});