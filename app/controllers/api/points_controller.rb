class Api::PointsController < ApplicationController
  before_action :set_enrollment
  before_action :set_point, only: [ :update, :destroy]
  
  def index
    render json: @enrollment.points
  end

  def create
    @point = @enrollment.points.new(point_params)
    if @point.save
      render json: @point
    else
      render json: { errors: @point.errors}, status: :unprocessable_entity
    end
  end

  def update
    if @point.update(point_params)
      render json: @point
    else
      render json: { errors: @point.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    @point.destroy
    render json: { message: 'Point Removed!' }
  end

  private

    def set_point
      @point = @enrollment.points.find(params[:id])
    end

    def point_params
      params.require(:point).permit(:name, :desc, :value, :enrollment_id)
    end

    def set_enrollment
      @enrollment = Enrollment.find(params[:enrollment_id])
    end
end
