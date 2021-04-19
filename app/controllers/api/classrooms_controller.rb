class Api::ClassroomsController < ApplicationController
  before_action :set_classroom
  
  def index
    render json: Classroom.all
  end
  def show
    @classroom = Classroom.find(params[:id])
    render json: @classroom
  end
  def create
    @classroom = Classroom.new(classroom_params)
    if @classroom.save
      render json: @classroom
    else
      render json: { errors: @classroom.errors }, status: :unprocessable_entity
    end
  end
  def update
    if @classroom.update(classroom_params)
      render json: @classroom
    else
      render json: { errors: @classroom.errors }, status: :unprocessable_entity
    end
  end
  def newclassroom 
    render json: Classroom.last
  end
  def destroy
    @classroom.destroy
    render json: { message: 'classroom deleted' }
  end

  def classroomUsers
   
    render json: @classroom.users
  end
  
  private
    def classroom_params
      params.require(:classroom).permit(:name)
    end

    def set_classroom
      @classroom = Classroom.find(params[:id])
    end
end
