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
});