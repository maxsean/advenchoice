class CreateRevelations < ActiveRecord::Migration[5.1]
  def change
    create_table :revelations do |t|
      t.belongs_to :user
      t.belongs_to :journal

      t.timestamps
    end
    add_index :revelations, [:user_id, :journal_id], unique: true
  end
end
