angular.module('alurapic').controller('FotosController', function($scope, $http){

    $scope.fotos = [];
    $scope.filtro = ''; //Texto digitado pelo usuário - ng-model - two way data binding.

    $http.get('v1/fotos')
        .success(function(fotos){
            console.log(fotos);
            $scope.fotos = fotos;
        })
        .error(function(error){
            console.log(error);
        })

    $scope.remover = function(foto){
        console.log('chamado');
        $http.delete('/v1/fotos/' + foto._id)
        .success(function(){
            console.log('Deletado com sucesso!');
            $scope.mensagem = "Foto " + foto.descricao + " deletada com sucesso!";
            //Recarregar lista de fotos no cliente:
            var indice = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indice, 1);
        }).error(function(erro){
            console.log('Erro na deleção - ' + erro);
            $scope.mensagem = "Erro na deleção!";
        });
    };




    





    // Usando recuperação de dados com ajax via $http e promisse.
    // var promise = $http.get('v1/fotos');

    // promise.then(function(retorno){
    //     $scope.fotos = retorno.data;
    // }).catch(function(error){
    //     console.log(error)
    // })
});