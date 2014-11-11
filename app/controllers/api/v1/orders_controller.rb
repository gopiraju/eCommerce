class Api::V1::OrdersController < Api::ApiController
  before_filter :authenticate_user! 
  def index
    @orders = current_user.orders
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
    @product_info = Product.select(:name, :price).where(:id => product_id)
    product_name = @product_info[0].name
    product_price = @product_info[0].price
    #puts "user id: #{user_id}, product id :#{product_id}."
    puts "++++++++++++++++++++++++++++++++++++++++++++++++++"
    @order = Order.create(:user_id => user_id, :product_id => product_id, :name => product_name, :price => product_price)
      if @order
        render :json => "success"
      else
        render :json => "badresponse"
      end 
  end

  def destroy
    @order = Order.find_by_id(params[:id]).destroy
    render json: @order
  end

end

