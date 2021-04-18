class CreateRewards < ActiveRecord::Migration[6.1]
  def change
    create_table :rewards do |t|
      t.string :name
      t.integer :cost
      t.text :desc
      t.belongs_to :enrollment, null: true, foreign_key: true

      t.timestamps
    end
  end
end
