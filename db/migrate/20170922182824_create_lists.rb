class CreateLists < ActiveRecord::Migration[5.1]
  def change
    create_table :lists do |t|
      t.references :board, foreign_key: true
      t.string :name
      t.float :position, index: true

      t.timestamps
    end
  end
end
