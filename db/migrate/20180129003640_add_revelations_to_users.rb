class AddRevelationsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :revelations, :string, array: true, default: []
  end
end
