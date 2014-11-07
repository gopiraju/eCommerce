angular.module('eCommerce').controller('ProductController', 
  ['$rootScope','$scope','products', function($rootScope, $scope,
    $products_services, response) {
    $scope.$on('refresh_products', function(event, message) {
      $scope.products = $products_services.model.get();
      $products_services.list.get($scope.products).then(function(response){
      $scope.products = response.data
      });
    });
  $scope.$broadcast('refresh_products');    
  }
]);
