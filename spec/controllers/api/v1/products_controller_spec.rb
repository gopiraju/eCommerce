require 'rails_helper'
RSpec.describe Api::V1::ProductsController, :type => :controller do
  let(:product) { FactoryGirl.create(:product) }
  let(:seller) { FactoryGirl.create(:user, role_id: 1) }

  before (:each) do
    sign_in seller
  end

  describe "GET #index" do
    it "responds successfully with an HTTP 200 status code" do
      get :index
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end
  end

  describe "GET #show" do
    it "show product" do
      product
      product = Product.find(1)
      expect(response.status).to eq(200)
    end
  end

  describe "GET #create" do
    it "create product" do
      product
      expect(Product.all.count).to eq(1)
    end
  end

  describe "GET #update" do
    it "update  product" do
      product
      product = Product.find(1)
      put :update, :id => 1, eCommerce: { name: 'Car', describe: 'test', price: 5000 }
      expect(response.status).to eq(200)
    end
  end

  describe "GET #destroy" do
    it "destroy  product" do
      product
      product = Product.find(1)
      delete :destroy, :id => 1
      expect(response.status).to eq(200)
    end
  end
end