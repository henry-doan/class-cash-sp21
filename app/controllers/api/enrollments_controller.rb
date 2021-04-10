class Api::EnrollmentsController < ApplicationController

  def index
    render json: current_user.enrollments 
  end

  def create 
    @enrollment = current_user.enrollments.new(enrollment_params)
    if @enrollment.save
      render json: @enrollment
    else
      render json: { errors: @enrollment.errors}, status: :unprocessable_entity
    end
  end

  def update 
    @enrollment = current_user.enrollments.find(params[:id])
    if @enrollment.update(enrollment_params)
      render json: @enrollment
    else
      render json: { errors: @enrollment.errors}, status: :unprocessable_entity
    end
  end

  def destroy 
    @enrollment = current_user.enrollments.find(params[:id])
    @enrollment.destroy
    render json: { message: 'Enrollment Deleted!' }
  end

  private 
    def enrollment_params
      params.require(:enrollment).permit(:total_points)
    end

end
