class Api::UsersController < ApplicationController
  before_action :set_user

  def userEnrollments
    render json: @user.enrollments
  end

  def userClassrooms
    render json: @user.classrooms
  end

  private 

  def set_user
    @user = User.find(params[:id])
  end
end
