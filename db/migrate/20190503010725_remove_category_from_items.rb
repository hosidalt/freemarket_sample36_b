class RemoveCategoryFromItems < ActiveRecord::Migration[5.0]
  def change
    remove_foreign_key :items, :categories
    remove_foreign_key :items, :categories
    remove_reference :items, :category
  end
end
