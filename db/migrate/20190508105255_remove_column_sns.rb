class RemoveColumnSns < ActiveRecord::Migration[5.0]
  def change
    remove_column :sns_credentials, :token, :string
  end
end
