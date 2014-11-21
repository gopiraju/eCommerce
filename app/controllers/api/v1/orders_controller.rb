# order controller
module Api
  module V1
    class OrdersController < Api::ApiController
      before_filter :authenticate_user!
      def index
        @orders = policy_scope(Order.all)
        render json: @orders
      end

      def show
        orders = Order.all
        authorize orders
        @order = orders.find_by_id(params[:id])
        render json: @order
      end

      def create
        info = Product.find(params[:order][:product_id])
        order = current_user.orders.new(user_id: current_user.id, product_id: params[:order][:product_id], name: info[:name], price: info[:price])
        authorize order
        if order.save
          render json: 'success'
        else
          render json: 'badresponse'
        end
      end

      def destroy
        @delete_order = Order.find_by_id(params[:id])
        authorize @delete_order
        @order = @delete_order.destroy
        render json: @order
      end
    end
  end
end
