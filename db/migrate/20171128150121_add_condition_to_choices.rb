class AddConditionToChoices < ActiveRecord::Migration[5.1]
  def change
    add_column :choices, :condition, :string
  end
end
