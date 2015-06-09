class AddImageToSpirits < ActiveRecord::Migration
  def change
    add_column :spirits, :image, :text
  end
end
