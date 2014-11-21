# this is the index page for appliation
class HomesController < ApplicationController
  def index
    if user_signed_in?
      if current_user.role.name == 'Seller'
        redirect_to '/dashboards/'
      elsif current_user.role.name == 'Buyer'
        redirect_to '/orders/#/orders'
      end
    else
      redirect_to '/users/sign_up'
    end
  end
end
