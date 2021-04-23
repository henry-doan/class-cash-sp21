class Api::RewardsController < ApplicationController
  before_action :set_enrollment
  # before_action :set_enrollments
  before_action :set_reward, only: [ :update, :destroy]
  
  def index
    render json: @enrollment.rewards
  end

  def create
    @reward = @enrollment.rewards.new(reward_params)
    if @reward.save
      render json: @reward
    else
      render json: { errors: @reward.errors}, status: :unprocessable_entity
    end
  end

  def update
    if @reward.update(reward_params)
      render json: @reward
    else
      render json: { errors: @reward.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    @reward.destroy
    render json: { message: 'Reward Removed!' }
  end

  private

    def set_reward
      @reward = @enrollment.rewards.find(params[:id])
    end

    def reward_params
      params.require(:reward).permit(:name, :cost, :desc, :redeemed, :enrollment_id, :classroom_id)
    end

    def set_enrollment
      @enrollment = Enrollment.find(params[:enrollment_id])
    end

    def set_enrollments
      @enrollments = Enrollment.where(['classroom_id = ?', params[:classroom_id]])
    end
end
