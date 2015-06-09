class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :spirits, :type, :variety
  end
end
