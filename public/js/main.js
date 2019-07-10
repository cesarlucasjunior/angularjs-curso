angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider){

    //main.js é o módulo principal da aplicação.

    $locationProvider.html5Mode(true);

    //Roteamento interno, ou seja, do angular pra gerenciarmos as views.

    //Nesse módulo cadastramos o roteamento com o template e a controller responsável.
    $routeProvider.when('/fotos', {
        templateUrl : 'partials/principal.html',
        controller: 'FotosController'
    });

    $routeProvider.when('/fotos/new', {
        templateUrl : 'partials/foto.html',
        controller: 'FotoController'
    });

    $routeProvider.otherwise({redirectTo: '/fotos'});
});