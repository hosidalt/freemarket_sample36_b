Rails.application.routes.draw do
  devise_for :users

  root 'items#index'
  resources :items
  resources :mypages, only: [:index, :edit, :update] do
    resources :cards
  end
    resources :users
  resources :statuses
end
