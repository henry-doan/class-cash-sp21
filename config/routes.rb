Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    # resources :users 
    resources :classrooms do
      resources :enrollments
    end
    
    resources :enrollments do
      resources :points
    end
    resources :enrollments do
      resources :rewards
    end

    get 'userEnrollments/:id', to: 'users#userEnrollments'
  end
end
