angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){

    //Controller associada a foto.html e receberá os dados da página e realizará o processamento necessário.
    $scope.foto= {};
    $scope.mensagem = "";

    if($routeParams.fotoId) {
        $http.get('/v1/fotos/' + $routeParams.fotoId)
        .success(function(foto) {
            $scope.foto = foto;
        })
        .error(function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto!'
        });
    }

    //Método do formulário para enviar dados à API.
    $scope.submeter = function() {
        if($scope.formulario.$valid){
            if($routeParams.fotoId){
                $http.put('/v1/fotos/' + $scope.foto._id, $scope.foto)
                .success(function() {
                    $scope.mensagem = 'Foto alterada com sucesso!';
                })
                .error(function(erro) {
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível alterar!';
                });
            }else{
                $http.post('/v1/fotos', $scope.foto) //Envia para o endereço o objeto do scope.
                    .success(function(){
                        $scope.foto = {};
                        $scope.formulario.$setPristine();
                        $scope.mensagem = "Foto adicionada com sucesso!";
                    }).error(function(){ //Caso dê errado!
                        $scope.mensagem = "Algum problema aconteceu! Tente mais tarde!";
                    });
            }
        } else {
            console.log('Algo na requisição está errado!');
        };
    };
});