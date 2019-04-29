class RemoveParentIdFromItems < ActiveRecord::Migration[5.0]
  def change
    remove_reference :items, :parent_category
  end
end
