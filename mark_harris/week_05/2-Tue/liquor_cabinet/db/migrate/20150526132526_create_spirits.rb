class CreateSpirits < ActiveRecord::Migration
  def change
    create_table :spirits do |t|
      t.string :name
      t.string :type
      t.text :description
      t.string :origin
      t.string :volume
      t.float :alcohol
      t.float :price

      t.timestamps
    end
  end
end
