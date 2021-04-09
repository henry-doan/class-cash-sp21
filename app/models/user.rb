# frozen_string_literal: true

class User < ActiveRecord::Base

  has_many :enrollments, dependent: :destroy
  has_many :classrooms, through: :enrollments
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
end
