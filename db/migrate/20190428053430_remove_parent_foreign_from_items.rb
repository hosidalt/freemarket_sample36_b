class RemoveParentForeignFromItems < ActiveRecord::Migration[5.0]
  def change
    remove_column :items, :parent_category_id
  end
end
