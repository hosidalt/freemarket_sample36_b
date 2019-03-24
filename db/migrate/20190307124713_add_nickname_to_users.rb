class AddNicknameToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :family_name,        :string,    null: false
    add_column :users, :first_name,         :string,    null: false
    add_column :users, :kana_family_name,   :string,    null: false
    add_column :users, :kana_first_name,    :string,    null: false
    add_column :users, :birth_year,         :integer,   null: false
    add_column :users, :birth_month,        :integer,   null: false
    add_column :users, :birth_day,          :integer,   null: false
    add_column :users, :credit,             :integer,   null: false,  unique: true
    add_column :users, :tel,                :string
    add_column :users, :adress,             :string
    add_column :users, :profil_image,       :string
    add_column :users, :profil_comment,     :text
  end
end
