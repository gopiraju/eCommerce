class HomesController < ApplicationController
  def index
  if user_signed_in?
    redirect_to '/dashboards/'
  else
    redirect_to '/users/sign_up'
  end
end
end
