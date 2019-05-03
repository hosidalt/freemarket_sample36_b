class RemoveForeignFromImages < ActiveRecord::Migration[5.0]
  def change
    remove_foreign_key :images, :items
  end
end
