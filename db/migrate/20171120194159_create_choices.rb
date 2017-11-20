class CreateChoices < ActiveRecord::Migration[5.1]
  def change
    create_table :choices do |t|
      t.belongs_to :encounter
      t.string :body, null: false
      t.integer :next, null: false

      t.timestamps
    end
  end
end
