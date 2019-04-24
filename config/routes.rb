Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  root 'items#index'
  resources :items
  resources :mypages, only: [:index] do
    resources :cards
  end
  resources :profiles, only: [:index]
  resources :logouts, only: [:index]
  resources :identifications, only: [:index]
  resources :users
  resources :statuses
end

