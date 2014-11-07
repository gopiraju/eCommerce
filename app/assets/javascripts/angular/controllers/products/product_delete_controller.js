angular.module('eCommerce').controller('DeleteController', function($scope, $modal, $log, $state, $stateParams) {
   var modalInstance = $modal.open({
      templateUrl: 'DeleteModalContent.html',
      controller: 'DeleteModalInstanceCtrl',
 });

    modalInstance.result.then(function () {     
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
});
angular.module('eCommerce').controller('DeleteModalInstanceCtrl', function($scope, $state, $modal, $modalInstance, $rootScope, $stateParams, products) {
      $scope.delete = function (products_data) {
      $scope.id = $stateParams.id
      console.log($scope.id)
      products.product.delete($scope.id).then(function(response){
      $scope.products = response
      $modalInstance.dismiss('cancel');
      $state.go('products');
      $rootScope.$broadcast('refresh_products');
        });
  };
  $scope.cancel = function() {
    $state.go('products');
    $modalInstance.dismiss('cancel');    
  };
});




