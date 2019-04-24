class CreateStatuses < ActiveRecord::Migration[5.0]
  def change
    create_table :statuses do |t|
      t.integer     :stage, null: false
      t.references  :item,  null: false, unique: true
      t.references  :buyer, null: false
      t.timestamps
    end
  end
end
