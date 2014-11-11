# DocumentPolicy class
class DocumentPolicy < ApplicationPolicy
  # Authorization for index action
  class Scope < Struct.new(:current_user, :scope)
    def resolve
      if !current_user.nil? && (current_user.role?('Administrator') ||
        current_user.role?('Instructor') ||
        current_user.role?('SupportSpecialist'))
        scope
      elsif current_user.role?('Student')
        # Note needed to show student related documents
      end
    end
  end

  def create?
    @current_user.role?('Administrator') || @current_user.role?('SupportSpecialist') || @current_user.role?('Instructor')
  end

  def show?
    if !current_user.nil? && current_user.role?('Administrator') ||
      current_user.role?('Instructor') ||
      current_user.role?('SupportSpecialist') || current_user.role?('Student')
      true
    else
      false
    end
  end

  def destroy?
    @current_user.role?('Administrator') || @current_user.role?('SupportSpecialist') || @current_user.role?('Instructor')
  end

  def update?
    @current_user.role?('Administrator') || @current_user.role?('SupportSpecialist') || @current_user.role?('Instructor')
  end
end