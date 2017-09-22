require 'rails_helper'

RSpec.describe "Boards", type: :request do
  describe "GET /boards" do
    it "works!" do
      get boards_path
      expect(response).to have_http_status(200)
    end
  end
end
