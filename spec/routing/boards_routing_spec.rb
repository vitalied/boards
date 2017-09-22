require "rails_helper"

RSpec.describe BoardsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(get: "/api/boards").to route_to("boards#index", format: :json)
    end

    it "routes to #show" do
      expect(get: "/api/boards/1").to route_to("boards#show", id: '1', format: :json)
    end


    it "routes to #create" do
      expect(post: "/api/boards").to route_to("boards#create", format: :json)
    end

    it "routes to #update via PUT" do
      expect(put: "/api/boards/1").to route_to("boards#update", id: '1', format: :json)
    end

    it "routes to #update via PATCH" do
      expect(patch: "/api/boards/1").to route_to("boards#update", id: '1', format: :json)
    end

    it "routes to #destroy" do
      expect(delete: "/api/boards/1").to route_to("boards#destroy", id: '1', format: :json)
    end

  end
end
