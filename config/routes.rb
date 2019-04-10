Rails.application.routes.draw do
  devise_for :users

  root 'items#index'
<<<<<<< HEAD
  resources :mypages, only: [:index]
=======
  resources :mypages, only: [:index, :edit, :update]
>>>>>>> ayukua/master

end
