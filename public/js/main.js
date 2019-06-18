angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider){

    $routeProvider.when('/fotos', {
        templateUrl : 'partials/principal.html',
        controller: 'FotosController'
    });

    $routeProvider.otherwise({redirectTo: '/fotos'});
});