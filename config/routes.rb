Rails.application.routes.draw do
  devise_for :users

  root 'items#index'
  resources :items, only: [:new]
  resources :mypages, only: [:index, :edit, :update]

end
