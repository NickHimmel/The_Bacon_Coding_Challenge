Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'site#index'
  namespace :api do
    namespace :v1 do
      resources :jobs do
      end
      resources :users, except: :destroy do
      end
    end
  end
end
