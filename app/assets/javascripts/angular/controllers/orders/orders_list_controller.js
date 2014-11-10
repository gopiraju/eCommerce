angular.module('eCommerce').controller('ListOrderController', function($scope, $modal, $log, $state,  orders) {
  
  var modalInstance = $modal.open({
      templateUrl: 'ListOrderModalContent.html',
      controller: 'ListOrderInstanceController'
    });
  modalInstance.result.then(function () {
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
});

angular.module('eCommerce').controller('ListOrderInstanceController', function($rootScope,  $scope, $state, $stateParams, $modalInstance, orders) {
      $scope.place_order = function (products_data) {
      // $scope.order.user_id = current_user.id
      // $scope.order.product_id = $stateParams.id
      orders.single.post($scope.order).then(function(response){
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

// angular.module('eCommerce').controller('ListOrderController', 
//   ['$rootScope','$scope','products', function($rootScope, $scope,
//     $products_services, response) {
//     $scope.$on('refresh_products', function(event, message) {
//       $scope.products = $products_services.model.get();
//       $products_services.list.get($scope.products).then(function(response){
//       $scope.products = response.data
//       });
//     });
//   $scope.$broadcast('refresh_products');    
//   }
// ]);
