class AddCategoryToItems < ActiveRecord::Migration[5.0]
  def change
    add_reference :items, :parent_category,         foreign_key: { to_table: :categories }
    add_reference :items, :child_category,          foreign_key: { to_table: :categories }
    add_reference :items, :grandchild_category,     foreign_key: { to_table: :categories }
  end
end
