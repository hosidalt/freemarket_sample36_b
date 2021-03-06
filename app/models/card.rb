class Card < ApplicationRecord
  belongs_to :user, optional: true

  validates :user_id,     presence: true
  validates :customer_id, presence: true
  validates :card_id,     presence: true, uniqueness: true
end
