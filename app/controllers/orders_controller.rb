# order controller
class OrdersController < ApplicationController
  before_filter :authenticate_user!
  def index
    if current_user.role.name == 'Buyer'
    else
      redirect_to '/dashboards/#/products'
    end
  end
end
