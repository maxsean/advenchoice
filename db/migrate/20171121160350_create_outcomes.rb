class CreateOutcomes < ActiveRecord::Migration[5.1]
  def change
    create_table :outcomes do |t|
      t.belongs_to :choice
      t.string :outcome_type
      t.string :body, null: false

      t.timestamps
    end
  end
end
