class CreateJournals < ActiveRecord::Migration[5.1]
  def change
    create_table :journals do |t|
      t.belongs_to :character, null: false
      t.belongs_to :encounter, null: false
      t.text :body, null: false
      t.string :date, null: false

      t.timestamps
    end
  end
end
