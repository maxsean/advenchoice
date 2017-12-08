Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :encounters, only: [:show]
      resources :sessions, only: [:create]
      resources :users, only: [:create]
    end
  end

  root 'static_pages#index'

  get '*path', to: 'static_pages#index'
end
