class Api::ClassroomsController < ApplicationController
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
    @classroom = Classroom.find(params[:id])
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
    @classroom = Classroom.find(params[:id])
    @classroom.destroy
    render json: { message: 'classroom deleted' }
  end

  def classroomUsers
    @classroom = Classroom.find(params[:id])
    render json: @classroom.users
  end

  def classroomRewards
    @classroom = Classroom.find(params[:id])
    render json: @classroom.rewards
  end
  
  private
    def classroom_params
      params.require(:classroom).permit(:name)
    end
end
