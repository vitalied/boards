class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.references :list, foreign_key: true
      t.string :name
      t.float :position, index: true

      t.timestamps
    end
  end
end
