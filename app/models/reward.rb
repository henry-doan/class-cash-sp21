class Reward < ApplicationRecord
  belongs_to :enrollment
  belongs_to :classroom
end
