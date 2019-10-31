Rails.application.routes.draw do
  resources :exercises
  resources :workouts
  resources :budgets
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #auth
  resources :users, only: [:create]
  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile'
end
