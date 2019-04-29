class AddParentIdToItems < ActiveRecord::Migration[5.0]
  def change
    add_reference :items, :parent_category,     foreign_key: { to_table: :categories }
    add_column :items, :shipping_method,     :integer
    add_column :items, :condition,           :integer
    add_column :items, :delivery_fee_payer,  :integer
    add_column :items, :area,                :integer
    add_column :items, :days_to_delivery,    :integer
  end
end
