class Api::UsersController < ApplicationController

  def userEnrollments
    @user = User.find(params[:id])
    render json: @user.enrollments
  end
end
