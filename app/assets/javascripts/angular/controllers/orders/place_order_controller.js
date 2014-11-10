angular.module('eCommerce').controller('PlaceOrderController', function($scope, $modal, $log, $state,  orders) {
  
  var modalInstance = $modal.open({
      templateUrl: 'PlaceOrderModalContent.html',
      controller: 'PlaceOrderInstanceController'
    });
  modalInstance.result.then(function () {
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
});

angular.module('eCommerce').controller('PlaceOrderInstanceController', function($rootScope,  $scope, $state, $stateParams, $modalInstance, orders) {
      $scope.place_order = function (products_data) {
        console.log("+++++++++++++++PlaceOrderController+++++++++++++++++++")
        console.log($stateParams.id)
        console.log("++++++++++++++++++++++++++++++++++")
       //$scope.order.user_id = current_user.id
       //$scope.order.product_id = $stateParams.id
      orders.single.post($stateParams.id).then(function(response){
          if(response.status=200){
           $state.go('orders');
          } else {
            console.log("agin goes to the new page")
          }
        });
      $modalInstance.dismiss('cancel');
      $rootScope.$broadcast('refresh_products');
      $state.go('orders');
      $modalInstance.dismiss('cancel');
  };
$scope.cancel = function() {
    $rootScope.$broadcast('refresh_products');    
    $modalInstance.dismiss('cancel');
    $state.go("orders")
   };
});



  