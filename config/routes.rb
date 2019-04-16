Rails.application.routes.draw do
  devise_for :users

  root 'items#index'
  resources :items
  resources :mypages, only: [:index] do
    resources :cards
  end
  resources :profiles, only: [:index]
  resources :identifications, only: [:index]
  resources :users
  resources :statuses


end

