var app = angular.module('pebbleCheckout', ['ngRoute', 'ui.router']);

app.run(function($rootScope, $state){
  $rootScope.$on('$stateChangeSuccess',function(){
      $("html, body").animate({ scrollTop: 60 }, 800);
  })
});

app.config(function($stateProvider,  $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('shipping', {
      url: '/',
      templateUrl: './app/templates/shipping.html',
      controller: 'ShippingCtrl'
    })
    .state('billing', {
      url: '/',
      templateUrl: './app/templates/billing.html',
      controller: 'ShippingCtrl'
    })
    .state('orderSummary', {
      url: '/',
      templateUrl: './app/templates/orderSummary.html',
      controller: 'ShippingCtrl'
    })

  $locationProvider.html5Mode(true);
});
