class Api::V2::OrdersController < Api::ApiController

  def index
    @orders = Order.all
    render json: @orders
  end

  def show
    
  end

  def create
    
  end

  def edit
   
  end

  def update
    
  end

  def destroy
  
  end

end

