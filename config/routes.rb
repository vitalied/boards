Rails.application.routes.draw do

  defaults format: :json do
    root to: -> {[404, {}, ['']]}

    scope :api do
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
