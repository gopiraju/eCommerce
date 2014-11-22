# Dashboards Controller for Seller
class DashboardsController < ApplicationController
  before_filter :authenticate_user!
  def index
    if current_user.role.name == 'Seller'
    else
      redirect_to '/orders/#/orders'
    end
  end
end
