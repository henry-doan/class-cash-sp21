class CreateClassroomRewards < ActiveRecord::Migration[6.1]
  def change
    create_table :classroom_rewards do |t|
      t.string :name
      t.integer :cost
      t.text :desc
      t.belongs_to :classroom, null: false, foreign_key: true

      t.timestamps
    end
  end
end
