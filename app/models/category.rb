class Category < ApplicationRecord
  has_ancestry
  has_many :item_categories

  require "csv"
  def self.import(file)
    CSV.foreach(file.path, headers: true) do |row|
      category = new
      category.attributes = row.to_hash.slice(*updatable_attributes)
      category.id = row.to_hash.values[0]
      category.save!
    end
  end

  def self.updatable_attributes
    ["id","category","ancestry"]
  end
  
end
