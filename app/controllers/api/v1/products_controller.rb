class Api::V1::ProductsController < Api::ApiController
before_filter :authenticate_user!
	def index
    @products = current_user.products
    render json: @products    
	end

  def show
    @product = Product.find_by_id(params[:id])
    render json: @product  
	end

  def create
    @product = current_user.products.create(product_params)
    if @product
      render json: @product
    else
      render :json => "badresponse"
    end
  end

  def edit
    @product = Product.find_by_id(params[:id])
    render json: @product 
  end

  def update
    @product = Product.find_by_id(params[:id]).update_attributes(product_params)
    render json: @product 
  end

  def destroy
    @product = Product.find_by_id(params[:id]).destroy
    render json: @product
    
  end

  private
  def product_params
    params.require(:eCommerce).permit(:name,:description,:price)
  end

end

