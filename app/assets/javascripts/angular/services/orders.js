var myapp = angular.module('eCommerce');
myapp.factory('orders', ['$http',function($http, $scope, $stateParams) {
  var get_default = function() {
    return {
        list: [],
        single: {},
        statuses: [],
        order: {}
    };
  }
  

  var get_all_orders = function () {
    return $http.get('/api/v1/orders/').success(function(response) 
      { 
        orders = response
      }).error(function(response) {
      console.log("fail the error")
    });    
  }



  var place_order = function (orders) {
    return $http.post('/api/v1/orders/',{ product_id:orders }).success(function(response) 
      { 
      }).error(function(response) {
      console.log("fail the error")
    });    
  }

  var delete_order = function(order_id){
    return $http.delete('/api/v1/orders/'+ order_id)
      .success(function(response){
    })
      .error(function(response){
      console.log("this error messages")
    });
  }



  
return {
  model: {
   
  },

  list: {
    get: get_all_orders
  },

  single: {
    post: place_order       
  },

  order: {
    delete: delete_order  
  }
}

  }]);
