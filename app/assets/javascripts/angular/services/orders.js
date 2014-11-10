var myapp = angular.module('eCommerce');
myapp.factory('orders', ['$http',function($http, $scope, $stateParams) {
  var get_default = function() {
    return {
        list: [],
        single: {},
        statuses: [],
        product: {}
    };
  }
  

  var get_all_orders = function () {
    return $http.get('/api/v1/orders/').success(function(response) 
      { 
        orders = response
        console.log("++++++++++++++List Orders factory+++++++++++++++")
        console.log(orders)
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++")
      }).error(function(response) {
      console.log("fail the error")
    });    
  }



  var place_order = function (orders) {
    console.log("++++++++++++++from Orders factory+++++++++++++++")
    console.log(orders)
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++")
    return $http.post('/api/v1/orders/',{ product_id:orders }).success(function(response) 
      { 
      }).error(function(response) {
      console.log("fail the error")
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

  product: {
     
  }
}

  }]);
