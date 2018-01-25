class AddChapterToEncounter < ActiveRecord::Migration[5.1]
  def change
    add_column :encounters, :chapter, :string
  end
end
