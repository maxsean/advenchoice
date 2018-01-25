class AddEncounterToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :encounter, :integer, default: 1
  end
end
