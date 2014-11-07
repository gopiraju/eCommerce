var myApp = angular.module('myApp', []);
myApp.factory('products',['$http',function($http) {
   var get_default = function() {
    return {
        list: [],
        single: {},
        statuses: [],
        product:{}
    };
  }
  
  var get_gadget_info = function (gadget) {
    return $http.get('/api/v1/products/').
      success(function(response) 
      { 
        console.log("this is success response")
      }).error(function(response) {
      console.log("fail the error")
    });     
  }


 //Public facing API
  return {
    modal: {
        get: edit_gadget_info
    },
    single: {
      get: get_gadget_info,
      post: create_gadget,
      put: updata_gadget,
      remove: remove_gadget
    }
  };
}]);
