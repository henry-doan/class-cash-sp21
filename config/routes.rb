Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    # resources :users 
    resources :classrooms do
      resources :enrollments
    end

    resources :classrooms do
      resources :classroom_rewards 
    end
    
    resources :enrollments do
      resources :points
    end
    resources :enrollments do
      resources :rewards
    end

    get 'classroomid', to: 'classrooms#newclassroom'
    get 'userEnrollments/:id', to: 'users#userEnrollments'
    get 'userClassroom/:id', to: 'users#userClassrooms'
    get 'classroomUsers/:id', to: 'classrooms#classroomUsers'
    get 'findEnrollment/:user_id/:classroom_id', to: 'enrollments#findEnrollment'
    get 'classroomRewards/:classroom_id', to: 'enrollments#classroomRewards'
  end
end
