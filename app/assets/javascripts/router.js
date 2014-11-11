angular.module('eCommerce').config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/products');
    
    $stateProvider
    .state('index', {
            url: '/index',
            views: {
            'container': {
              templateUrl: "/assets/angular/views/home/index.html"
              }
            }
          })
    .state('products', {
            url: '/products',
            views: {
            'container': {
              templateUrl: "/assets/angular/views/products/products.html",
              controller: 'ProductController'
              }
            }
          })

        .state('products.create', {
                url: '/create',
                views: {
                  'container': {
                  templateUrl: "/assets/angular/views/products/create_product.html",
                  controller: 'addController'
                 }
               }
            })
        .state('products.edit', {
                url: '/edit/:id',
                views: {
                'container_edit': {
                  templateUrl: "/assets/angular/views/products/product_edit.html",
                  controller: 'editProductController'
                  }
                }
              })
        .state('products.delete', {
                url: '/delete/:id',
                views: {
                'container_edit': {
                  templateUrl: "/assets/angular/views/products/product_delete.html",
                  controller: 'DeleteController'
                  }
                }
              })
   .state('orders', {
            url: '/orders',
            views: {
            'container': {
              templateUrl: "/assets/angular/views/orders/index.html",
              controller: 'ProductController'
              }
            }
          })
        .state('orders.placeOrder', {
            url: '/placeOrder/:id',
            views: {
            'container': {
              templateUrl: "/assets/angular/views/orders/place_order.html",
              controller: 'PlaceOrderController'
              }
            }
          })
         .state('orders.orders_list', {
                  url: '/orders_list',
                  views: {
                  'container': {
                    templateUrl: "/assets/angular/views/orders/orders_list.html",
                    controller: 'ListOrderController'
                    }
                  }
                })
         .state('orders.show_order', {
                  url: '/show_order/:order_id',
                  views: {
                  'container': {
                    templateUrl: "/assets/angular/views/orders/orders_list.html",
                    controller: 'ListOrderController'
                    }
                  }
                })
});