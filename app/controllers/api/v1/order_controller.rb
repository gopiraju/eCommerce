class Api::V2::OrdersController < Api::ApiController
  before_filter :authenticate_user! 
  def index
    @orders = Order.all.where(current_user.id)
    @order_products = Product.all.where(@orders)
    render json: @order_products
  end

  def show
    @order = Order.find_by_id(params[:id])
    render json: @order
  end

  def create
    @oredr_val.user_id =  current_user.id
    @oredr_val.product_id = params[:id]
    @order = Order.create(@oredr_val)
    if @product
      render json: @product
    else
      render :json => "badresponse"
    end
  end

  # def create
  #   @order = Order.new
  #   @order.user_id = params[:id]
  #   @order.product_id = current_user.id
  #    if @gadget.save
  #     render :json => "Saved"
  #    else
  #     render :json => "badresponce"
  #    end
  # end

  def edit
   
  end

  def update
    
  end

  def destroy
  
  end

  private
  def product_params
    params.require(:eCommerce).permit(:user_id,:product_id)
  end

end

