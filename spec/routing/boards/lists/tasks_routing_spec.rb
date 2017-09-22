require "rails_helper"

RSpec.describe Boards::Lists::TasksController, type: :routing do
  describe "routing" do

    it "routes to #create" do
      expect(post: "/api/boards/1/lists/2/tasks").to route_to("boards/lists/tasks#create", board_id: '1', list_id: '2', format: :json)
    end

    it "routes to #update via PUT" do
      expect(put: "/api/boards/1/lists/2/tasks/3").to route_to("boards/lists/tasks#update", board_id: '1', list_id: '2', id: '3', format: :json)
    end

    it "routes to #update via PATCH" do
      expect(patch: "/api/boards/1/lists/2/tasks/3").to route_to("boards/lists/tasks#update", board_id: '1', list_id: '2', id: '3', format: :json)
    end

    it "routes to #destroy" do
      expect(delete: "/api/boards/1/lists/2/tasks/3").to route_to("boards/lists/tasks#destroy", board_id: '1', list_id: '2', id: '3', format: :json)
    end

  end
end
