angular.module('eCommerce').controller('ListOrderController', function($scope, $modal, $log, $state,  orders) {
      orders.list.get().then(function(response){
      $scope.orders_list = response.data
      console.log("+++++++++++++++++++++ListOrderController++++++++++++++++++++++++")
      console.log($scope.orders_list)
      console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
  var modalInstance = $modal.open({
      templateUrl: 'ListOrderModalContent.html',
      controller: 'ListOrderInstanceController',
      resolve: {
                 orderval: function() {
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

angular.module('eCommerce').controller('ListOrderInstanceController', function($rootScope,  $scope, $state, $stateParams, $modalInstance, orders, orderval) {
      $scope.orders_list = orderval.data
        $scope.delete_order = function(order_id) {
        console.log("++++++++++++++++delete order+++++++++++++++++++")
        console.log(order_id)
        orders.order.delete(order_id).then(function(response){
        });
        $modalInstance.dismiss('cancel');
        $state.go('orders');
    };
 
 $scope.cancel = function() {    
    $modalInstance.dismiss('cancel');
        $state.go('orders');
   };
});
