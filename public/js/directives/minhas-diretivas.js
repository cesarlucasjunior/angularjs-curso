angular.module('minhasDiretivas', []).directive('meuPainel', function(){

    //Criando Directive Definition Object
    var ddo = {};

    //Restrição da diretiva - qual o tipo da diretiva - atributo ou elemento
    ddo.restrict = "AE";

    //Fazer com que a diretiva mantenha os elementos filhos na DOM
    ddo.transclude = true;

    //Escopo da diretiva - onde e qual parametro a diretiva recebe
    ddo.scope = {
        titulo : '@titulo'
    }

    //Template da diretiva - aonde ficará o html ou o próprio html
    ddo.templateUrl = 'js/directives/meu-painel.html';    
    

    return ddo;
})
.directive('minhaFoto', function(){

    var ddo = {};

    ddo.restrict = "E";

    ddo.transclude = true;

    ddo.scope = {
        url : '@url',
        titulo : '@titulo' 
    };

    ddo.templateUrl = 'js/directives/minha-foto.html';

    return ddo;
})
.directive('meuBotaoPerigo', function(){

    var ddo = {};

    ddo.restrict = "E";

    ddo.transclude = true;

    ddo.scope = {
        nome : '@',
        acao : '&'
    }

    ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

    return ddo;
});