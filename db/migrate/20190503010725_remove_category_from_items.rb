class RemoveCategoryFromItems < ActiveRecord::Migration[5.0]
  def change
    remove_foreign_key :items, :categories
    remove_foreign_key :items, :categories
    remove_foreign_key :items, :categories
    remove_foreign_key :items, :users
    remove_index :items, :parent_category_id
    remove_index :items, :child_category_id
    remove_index :items, :grandchild_category_id
    remove_index :items, :seller_id
  end
end
