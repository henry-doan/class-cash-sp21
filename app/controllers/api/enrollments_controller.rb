class Api::EnrollmentsController < ApplicationController
  before_action: set_classroom
  def index
    render json: @classroom.enrollments 
  end

  def show
    @enrollment = @classroom.enrollments.find(params[:id])
    render json: @enrollment
  end

  def create 
    @enrollment = @classroom.enrollments.new(enrollment_params)
    if @enrollment.save
      render json: @enrollment
    else
      render json: { errors: @enrollment.errors}, status: :unprocessable_entity
    end
  end

  def update 
    @enrollment = @classroom.enrollments.find(params[:id])
    if @enrollment.update(enrollment_params)
      render json: @enrollment
    else
      render json: { errors: @enrollment.errors}, status: :unprocessable_entity
    end
  end

  def destroy 
    @enrollment = @classroom.enrollments.find(params[:id])
    @enrollment.destroy
    render json: { message: 'Enrollment Deleted!' }
  end

  private 
    def enrollment_params
      params.require(:enrollment).permit(:total_points)
    end

    def set_classroom
      @classroom = Classroom.find(params[:classroom_id])
    end

end
