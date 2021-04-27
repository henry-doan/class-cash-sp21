class Classroom < ApplicationRecord
  has_many :enrollments, dependent: :destroy
  has_many :users, through: :enrollments
  has_many :classroom_rewards, dependent: :destroy
end
