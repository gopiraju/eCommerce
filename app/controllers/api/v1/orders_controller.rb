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
    puts "+++++++++++++++from orders api++++++++++++++++++++"
    user_id =  current_user.id
    product_id = params[:orders][:product_id]
    # product_name = params[:name][:product_name]
    # product_price = params[:price][:product_price]
    puts "#{product_id}."
    puts "+++++++++++++++++++++++++++++++++++"
    @order = Order.create(:user_id => user_id, :product_id => product_id)
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

