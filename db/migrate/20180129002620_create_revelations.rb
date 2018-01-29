class CreateRevelations < ActiveRecord::Migration[5.1]
  def change
    create_table :revelations do |t|
      t.belongs_to :character, null: false
      t.belongs_to :encounter, null: false
      t.text :body, null: false

      t.timestamps
    end
  end
end
