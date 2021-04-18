class AddClassroomToReward < ActiveRecord::Migration[6.1]
  def change
    add_reference :rewards, :classroom, null: true, foreign_key: true
  end
end
