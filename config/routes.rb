Rails.application.routes.draw do
  get 'auth/:provider/callback', to: 'api/v1/sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'api/v1/sessions#destroy', as: 'signout'

  namespace :api do
    namespace :v1 do
      resources :encounters, only: [:show]
      resources :sessions, only: [:create, :destroy]
      resources :users, only: [:index, :create, :update]
    end
  end

  root 'static_pages#index'

  get '*path', to: 'static_pages#index'
end
