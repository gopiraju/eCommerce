class HomesController < ApplicationController
  def index
  if user_signed_in?
    @role = current_user.role
      if @role.id == 1
          redirect_to '/dashboards/'
         else
        redirect_to '/orders/#/orders'
      end
    else
      redirect_to '/users/sign_up'
  end
end
end
