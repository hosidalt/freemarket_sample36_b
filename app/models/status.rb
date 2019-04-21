class Status < ApplicationRecord
  belongs_to :item

  validates :stage,     presence: true
  validates :item_id,   presence: true, uniqueness: true
  validates :buyer_id,  presence: true
end
