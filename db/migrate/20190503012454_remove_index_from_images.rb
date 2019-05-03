class RemoveIndexFromImages < ActiveRecord::Migration[5.0]
  def change
    remove_index :images, :item_id
  end
end
