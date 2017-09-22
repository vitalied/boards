require "rails_helper"

RSpec.describe Boards::ListsController, type: :routing do
  describe "routing" do

    it "routes to #create" do
      expect(post: "/api/boards/1/lists").to route_to("boards/lists#create", board_id: '1', format: :json)
    end

    it "routes to #update via PUT" do
      expect(put: "/api/boards/1/lists/2").to route_to("boards/lists#update", board_id: '1', id: '2', format: :json)
    end

    it "routes to #update via PATCH" do
      expect(patch: "/api/boards/1/lists/2").to route_to("boards/lists#update", board_id: '1', id: '2', format: :json)
    end

    it "routes to #destroy" do
      expect(delete: "/api/boards/1/lists/2").to route_to("boards/lists#destroy", board_id: '1', id: '2', format: :json)
    end

  end
end
