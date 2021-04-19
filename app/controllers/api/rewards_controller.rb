class Api::RewardsController < ApplicationController
  before_action :set_enrollment
  # before_action :set_enrollments
  before_action :set_reward, only: [ :create, :update, :destroy]
  
  def index
    render json: @enrollment.rewards
  end

  def create
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

  def classroomRewards
    @enrollments = Enrollment.where(['classroom_id = ?', params[:classroom_id]])
    @classroomRewards = []
    # @connection = ActiveRecord::Base.connection

    # @classroomRewards = @connection.exec_query("
    #   select r.name, r.cost, r.desc
    #   from rewards as r
    #   left join enrollments as e
    #   on r.enrollment_id = e.id
    #   where e.classroom_id = 1
    # ")
    # # @classroomRewards = Reward.left_outer_joins(:enrollment).where('classroom_id = ?', params[:classroom_id])
    # # @classroomRewards = Reward.includes(:enrollment).where(enrollment: { classroom_id: params[:classroom_id] })
    # # render json: @classroomRewards
    # return @classroomRewards
    @enrollments.each |i| do
      @classroomRewards.append(i.rewards)
    end

    render json: @clasroomRewards
  end

  private

    def set_reward
      @reward = @enrollment.rewards.find(params[:id])
    end

    def reward_params
      params.require(:reward).permit(:name, :cost, :desc, :enrollment_id, :classroom_id)
    end

    def set_enrollment
      @enrollment = Enrollment.find(params[:enrollment_id])
    end

    def set_enrollments
      @enrollments = Enrollment.where(['classroom_id = ?', params[:classroom_id]])
    end
end
