'use strict';
namespace app {
  angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/home.jade',
      controller: 'HomeController',
      controllerAs: 'vm'
    }).state('Create Book', {
      url: '/create',
      templateUrl: '/templates/createBook.html',
      controller: 'BookCreateController',
      controllerAs: 'vm'
    })


    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
