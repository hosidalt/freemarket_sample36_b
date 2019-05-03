class RemoveNameFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :name, :string
    remove_column :users, :credit, :integer
    remove_column :users, :token, :string
    remove_column :users, :provider, :string
    remove_column :users, :uid, :string
  end
end
