var myapp = angular.module('eCommerce');
myapp.factory('products', ['$http',function($http) {
  var get_default = function() {
    return {
        list: [],
        single: {},
        statuses: [],
        product: {}
    };
  }
  
  var get_products_info = function (products) {
    return $http.get('/api/v1/products/').success(function(response) 
      { 
        products.list = response
      }).error(function(response) {
      console.log("fail the error")
    });     
  }

var add_product_info = function (products) {
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

  var edit_product = function(product){
    //console.log("*********from factory********")
    return $http.get('/api/v1/products/'+ product)
      .success(function(response){
    //console.log(response)
    })
      .error(function(response){
      console.log("this error messages")
    });
  }

  var update_product = function(product_id, product_info){
    return $http.put('/api/v1/products/'+product_id,{eCommerce:product_info})
      .success(function(response){
    })
      .error(function(response){
      console.log("this error messages")
    });
  }

  var delete_product = function(product){
    return $http.delete('/api/v1/products/'+ product)
      .success(function(response){
    })
      .error(function(response){
      console.log("this error messages")
    });
  }
  
return {
  model: {
    get: get_default
  },

  list: {
    get: get_products_info
  },

  single: {
      post: add_product_info,
      get: edit_product,
      put: update_product,
  },

  product: {
    delete: delete_product  
  }
}

  }]);
