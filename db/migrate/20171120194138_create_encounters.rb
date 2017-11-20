class CreateEncounters < ActiveRecord::Migration[5.1]
  def change
    create_table :encounters do |t|
      t.text :body, null: false
      t.string :image

      t.timestamps
    end
  end
end
