class AddRedeemedColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :rewards, :redeemed, :boolean
  end
end
