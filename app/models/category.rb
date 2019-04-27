class Category < ApplicationRecord
  has_many :items, through: :item_categories
  has_many :item_categories

  require "csv"
  def self.import(file)
    CSV.foreach(file.path, headers: true) do |row|
      obj = new
      obj.attributes = row.to_hash.slice(*updatable_attributes)
      obj.id = row.to_hash.values[0]
      obj.save!
    end
  end

  def self.updatable_attributes
    ["id","category","parent_id"]
  end
  
end
