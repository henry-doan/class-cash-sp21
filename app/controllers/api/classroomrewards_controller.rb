class Api::ClassroomrewardsController < ApplicationController
  before_action :set_classroom
  def index
    render json: @classroom.classroom_rewards
  end

  def show
    @classroom_reward = @classroom.classroom_rewards.find(params[:id])
    render json: @classroom_reward
  end

  def create
    @classroom_reward = @classroom.classroom_rewards.new(classroom_reward_params)
    if @classroom_reward.save
      render json: @classroom_reward
    else
      render json: { errors: @classroom_reward.errors }, status: :unprocessable_entity
    end
  end

  def update
    @classroom_reward = @classroom.classroom_rewards.find(params[:id])
    if @classroom_reward.update(classroom_reward_params)
      render json: @classroom_reward
    else
      render json: { errors: @classroom_reward.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @classroom_reward = @classroom.classroom_rewards.find(params[:id])
    @classroom_reward.destroy
    render json: { message: 'Classroom Reward Deleted!' }
  end

  private

  def set_classroom
    @classroom = Classroom.find(params[:classroom_id])
  end

  def classroom_reward_params
    params.require(:classroom_reward).permit(:name, :cost, :desc, :classroom_id)
  end

end
