class Api::V1::OrdersController < Api::ApiController
  before_filter :authenticate_user! 
  def index
    @orders = current_user.orders
    #@order_products = Product.all.where(@orders)
    render json: @orders
  end

  def show
    @order = Order.find_by_id(params[:id])
    render json: @order
  end

  def create
    puts params.inspect
    puts "+++++++++++++++from orders api++++++++++++++++++++"
    user_id =  current_user.id
    product_id = params[:order][:product_id]
    puts "user id: #{user_id}, product id :#{product_id}."
    puts "+++++++++++++++++++++++++++++++++++"
    @order = Order.create(:user_id => user_id, :product_id => product_id)
      if @order
        render :json => "success"
      else
        render :json => "badresponse"
      end 
  end

  def edit
   
  end

  def update
    
  end

  def destroy
  
  end

  # private
  # def order_params
  #   params.require(:eCommerce).permit(:user_id,:product_id)
  # end

end

