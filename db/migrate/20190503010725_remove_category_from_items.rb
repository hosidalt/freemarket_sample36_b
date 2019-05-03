class RemoveCategoryFromItems < ActiveRecord::Migration[5.0]
  def change
    remove_index :items, :parent_category_id
    remove_index :items, :grandchild_category_id
  end
end
