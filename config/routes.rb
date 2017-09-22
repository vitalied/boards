Rails.application.routes.draw do

  defaults format: :json do
    root to: -> {[404, {}, ['']]}

    scope :api do
      resources :boards do
        resources :lists, controller: 'boards/lists', only: [:create, :update, :destroy] do
          resources :tasks, controller: 'boards/lists/tasks', only: [:create, :update, :destroy]
        end
      end
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
