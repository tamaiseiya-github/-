Rails.application.routes.draw do
  devise_for :users, controllers: { :omniauth_callbacks => "omniauth_callbacks" }
  # 下の行は削除する
  # get 'messages/index

  root "users#index"
  get "users/show"
  resources :users, only: [:edit, :update]
end