class AddColumnToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :name, "string"
    add_column :orders, :price, "float"
  end
end
