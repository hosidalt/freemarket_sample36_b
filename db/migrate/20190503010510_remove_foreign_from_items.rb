class RemoveForeignFromItems < ActiveRecord::Migration[5.0]
  def change
    remove_foreign_key :items, :categories
  end
end
