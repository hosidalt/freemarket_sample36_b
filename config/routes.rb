Rails.application.routes.draw do
  devise_for :users

  root 'items#index'
  resources :items
  resources :mypages, only: [:index] do
    resources :cards
  end
  resources :profiles, only: [:index]
<<<<<<< HEAD
  resources :identifications, only: [:index]

=======
  resources :users
  resources :statuses
>>>>>>> ayukua/master
end

