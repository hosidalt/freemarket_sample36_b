class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.text :introduce, null: false
      t.integer :condition, null: false
      t.integer :delivery_fee_payer, null: false
      t.integer :shipping_method, null: false
      t.integer :area, null: false
      t.integer :days_to_delivery, null: false
      t.integer :price, null: false
      t.references :seller, null: false
      t.references :parent_category, null: false
      t.references :child_category, null: false
      t.references :grandchild_category, null: false

      t.timestamps
    end
    add_foreign_key :products, :users, column: :seller_id
    add_foreign_key :products, :categories, column: :parent_category_id
    add_foreign_key :products, :categories, column: :child_category_id
    add_foreign_key :products, :categories, column: :grandchild_category_id
  end
end
