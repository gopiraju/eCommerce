var myapp = angular.module('eCommerce');
myapp.factory('orders', ['$http',function($http) {
  var get_default = function() {
    return {
        list: [],
        single: {},
        statuses: [],
        product: {}
    };
  }
  
  var place_order = function (products) {
  console.log("this is testing one")
    return $http.post('/api/v1/products/',{eCommerce:products}).success(function(response) 
      { 
        console.log(response)
        products.list = response
      }).error(function(response) {
      console.log("fail the error")
    });    
    console.log("add_product_info") 
  }

  
return {
  model: {
   
  },

  list: {
    
  },

  single: {
    post: place_order       
  },

  product: {
     
  }
}

  }]);
