class Enrollment < ApplicationRecord
  belongs_to :classroom
  belongs_to :user
  has_many :rewards, dependent: :destroy
  has_many :points, dependent: :destroy
end
