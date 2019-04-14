Rails.application.routes.draw do
  devise_for :users

  root 'items#index'
  resources :mypages, only: [:index]
  resources :profiles, only: [:index]

end

