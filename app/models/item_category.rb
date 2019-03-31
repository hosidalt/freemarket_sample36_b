class ItemCategory < ApplicationRecord
  belongs_to :item
  belogns_to :category
end
