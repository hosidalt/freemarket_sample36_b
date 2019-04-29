class ChangeColumnToItemns < ActiveRecord::Migration[5.0]
  def change
    add_foreign_key "items", "users", column: :"seller_id"
  end
end
