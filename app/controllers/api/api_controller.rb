# ApiController inheriting ActionController::Base
module Api
  class ApiController < ActionController::Base
    include Pundit
  end
end
