class Category < ApplicationRecord
  has_ancestry
  has_many :item_categories
end
