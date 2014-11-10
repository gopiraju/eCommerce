angular.module('eCommerce').controller('editProductController', function($scope, $modal, $log, $state, $stateParams,$rootScope, products) {
  $scope.id = $stateParams.id
  products.single.get($stateParams.id).then(function(response){
  var modalInstance = $modal.open({
      templateUrl: 'EditModalContent.html',
      controller: 'EditModalInstanceController',
      resolve: {
                 productval: function() {
                   return response;
                }
              }
    });
  modalInstance.result.then(function () {
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  });
});

angular.module('eCommerce').controller('EditModalInstanceController', function($rootScope,  $scope, $state, $stateParams, $modalInstance, productval,products) {
      $scope.orders_list = productval.data
      $scope.ok = function (products_data) {
      products.single.put($scope.product.id, $scope.product).then(function(response){
          if(response.status=200){
           $state.go('products');
          } else {
            console.log("agin goes to the new page")
          }
        });
      $modalInstance.dismiss('cancel');
      $rootScope.$broadcast('refresh_products');
      $state.go('products');
      $modalInstance.dismiss('cancel');
  };
 $scope.cancel = function() {
    $rootScope.$broadcast('refresh_products');    
    $modalInstance.dismiss('cancel');
    $state.go("products")
   };
});



  