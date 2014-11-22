# ProductPolicy class
class ProductPolicy < ApplicationPolicy
  # Scope for index
  def initialize(current_user, products)
    @current_user = current_user
    @record = products
  end

  class Scope < Struct.new(:current_user, :scope)
    def resolve
      if current_user.role.name == 'Seller'
        current_user.products
      else
        scope.all 
      end
    end
  end

  def show?
    if @current_user.role.name == 'Seller'
      true
    end
  end

  def create?
    if @current_user.role.name == 'Seller'
      true
    end
  end

  def update?
    if @current_user.role.name == 'Seller'
      true
    end
  end

  def destroy?
    if @current_user.role.name == 'Seller'
      true
    end
  end
  
end
