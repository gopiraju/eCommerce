angular.module('eCommerce').controller('addController', function($scope, $modal, $log, $state) {
   var modalInstance = $modal.open({
      templateUrl: 'AddModalContent.html',
      controller: 'AddModalInstanceCtrl',
 });

    modalInstance.result.then(function () {     
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
});
angular.module('eCommerce').controller('AddModalInstanceCtrl', function($scope, $state, $modal, $modalInstance, $rootScope, products) {
      $scope.ok = function (products_data) {
      products.single.post($scope.product).then(function(response){
          if(response.status=200){
           $state.go('products');
          } else {
            console.log("agin goes to the new page")
          }
        });
      $modalInstance.dismiss('cancel');
      $rootScope.$broadcast('refresh_products');
      $state.go('products');
  };
  $scope.cancel = function() {
    $state.go('products');
    $modalInstance.dismiss('cancel');    
  };
});



  