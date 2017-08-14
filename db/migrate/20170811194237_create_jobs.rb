class CreateJobs < ActiveRecord::Migration[5.0]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :company
      t.string :level
      t.integer :salary
      t.text :description
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end
