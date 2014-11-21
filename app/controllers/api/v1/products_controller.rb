# ProductsController for Seller
module Api
  module V1
    class ProductsController < Api::ApiController
      before_filter :authenticate_user!
      def index
        @products = policy_scope(Product.all)
        # ProductPolicy::Scope.new(current_user, Product).resolve
        render json: @products
      end

      def show
        @products = Product.all
        authorize @products
        @product = @products.find_by_id(params[:id])
        render json: @product
      end

      def create
        @product = current_user.products.new(product_params) 
        authorize @product      
        if @product.save
          render json: @product
        else
          render json: 'badresponse'
        end
      end

      def edit
        @product = Product.find_by_id(params[:id])
        render json: @product
      end

      def update
        @product = Product.find_by_id(params[:id])
        authorize @product
        @product = @product.update_attributes(product_params)
        render json: @product
      end

      def destroy
        @product = Product.find_by_id(params[:id])
        authorize @product
        @product = @product.destroy
        render json: @product
      end

      private
      def product_params
        params.require(:eCommerce).permit(:name, :description, :price)
      end
    end
  end
end
