class Category < ApplicationRecord
  has_many :items, through: :item_categories
  has_many :item_categories

  require "csv"
  def self.import(file)
    CSV.foreach(file.path, headers: true) do |row|
      import_data = new
      import_data.attributes = row.to_hash.slice(*updatable_attributes)
      import_data.id = row.to_hash.values[0]
      import_data.save!
    end
  end

  def self.updatable_attributes
    ["id","category","ancestry"]
  end
  
end
