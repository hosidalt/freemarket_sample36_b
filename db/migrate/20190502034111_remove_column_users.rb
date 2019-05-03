class RemoveColumnUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :family_name,        :string,    null: false
    remove_column :users, :first_name,         :string,    null: false
    remove_column :users, :kana_family_name,   :string,    null: false
    remove_column :users, :kana_first_name,    :string,    null: false
    remove_column :users, :birth_year,         :integer,   null: false
    remove_column :users, :birth_month,        :integer,   null: false
    remove_column :users, :birth_day,          :integer,   null: false
    remove_column :users, :postal_code,        :string,    null: false
    remove_column :users, :prefecture,         :string,    null: false
    remove_column :users, :city,               :string,    null: false
    remove_column :users, :block_number,       :integer,   null: false
    remove_column :users, :bilding_name,       :string
    remove_column :users, :tel,                :string
    remove_column :users, :profil_image,       :string
    remove_column :users, :profil_comment,     :text
  end
end
