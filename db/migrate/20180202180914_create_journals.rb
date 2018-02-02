class CreateJournals < ActiveRecord::Migration[5.1]
  def change
    create_table :journals do |t|
      t.belongs_to :user
      t.belongs_to :revelation

      t.timestamps
    end
    add_index :journals, [:user_id, :revelation_id], unique: true
  end
end
