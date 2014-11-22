# OrderPolicy class
class OrderPolicy < ApplicationPolicy
  # Scope for index
  def initialize(current_user, orders)
    @current_user = current_user
    @record = orders
  end

  class Scope < Struct.new(:current_user, :scope)
    def resolve
      if current_user.role.name == 'Buyer'
        current_user.orders
      end
    end
  end

  def show?
    if @current_user.role.name == 'Buyer'
      true    
    end
  end

  def create?
    if @current_user.role.name == 'Buyer'
      true
    end
  end

  def destroy?
    if @current_user.role.name == 'Buyer'
      true
    end
  end  
end
