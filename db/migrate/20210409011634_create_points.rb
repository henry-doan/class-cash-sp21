class CreatePoints < ActiveRecord::Migration[6.1]
  def change
    create_table :points do |t|
      t.string :name
      t.text :desc
      t.integer :value
      t.belongs_to :enrollment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
