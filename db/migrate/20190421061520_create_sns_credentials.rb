class CreateSnsCredentials < ActiveRecord::Migration[5.0]
  def change
    create_table :sns_credentials do |t|
      t.string :name
      t.string :provider
      t.string :uid
      t.string :token
      t.string :email

      t.timestamps
    end
  end
end
