# product model
class Product < ActiveRecord::Base
  validates_presence_of :name
  validates_presence_of :description
  validates_presence_of :price
  has_and_belongs_to_many :categories
  has_many :orders
  belongs_to :user
end
