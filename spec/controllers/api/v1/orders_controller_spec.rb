require 'rails_helper'
RSpec.describe Api::V1::OrdersController, :type => :controller do
  let(:order) { FactoryGirl.create(:order) }
  let(:product) { FactoryGirl.create(:product) }
  let(:buyer) { FactoryGirl.create(:user) }
  
  before (:each) do
    sign_in buyer
  end

  describe "GET #index" do
    it "responds successfully with an HTTP 200 status code" do 
      get :index
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end
  end

  describe "GET #create" do
    it "create order into order table" do
      product
      info = { name: product.name, price: product.price }
      post :create, order: {user_id: 1, product_id: product.id, name: info[:name], price: info[:price]}
      expect(Order.all.count).to eq(1)
    end
  end

  describe "GET #show" do
    it "show order into order table" do
      order
      product = Order.find(1)
      expect(response.status).to eq(200)
    end
  end

  describe "GET #destroy" do
    it "delete order into order table" do
      order
      product = Order.find(1)
      delete :destroy, :id => 1
      expect(response.status).to eq(200)
    end
  end
end