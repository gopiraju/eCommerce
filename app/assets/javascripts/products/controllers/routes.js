angular.module('myApp').config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/products');
        $stateProvider
          .state('products', {
            url: "/products",
            views: {
            'container': {
              templateUrl: "/assets/project/views/products/total_products.html"
              }
            }
          })
    }]);