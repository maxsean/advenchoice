Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  get 'auth/:provider/callback', to: 'api/v1/sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'api/v1/sessions#destroy', as: 'signout'

  namespace :api do
    namespace :v1 do
      resources :encounters, only: [:show]
      resources :sessions, only: [:create, :destroy]
      resources :users, only: [:index, :create, :update]
      resources :revelations, only: [:index]
      resources :characters, only: [:index]
    end
  end

  root 'static_pages#index'

  get '*path', to: 'static_pages#index'
end
