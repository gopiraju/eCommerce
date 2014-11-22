ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
# ActiveSupport class
module TestCase
  class ActiveSupport
    fixtures :all
  end
end
