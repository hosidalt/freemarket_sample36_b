class Product < ApplicationRecord
  has_many :images, foreign_key: "item_id", dependent: :delete_all
  has_many :statuses, foreign_key: "item_id", dependent: :delete_all
  has_many :item_categories, foreign_key: "item_id", dependent: :delete_all
  belongs_to :user, foreign_key: "seller_id"

  validates :name, presence: true
  validates :introduce, presence: true
  validates :condition, presence: true
  validates :delivery_fee_payer, presence: true
  validates :shipping_method, presence: true
  validates :area, presence: true
  validates :days_to_delivery, presence: true
  validates :price, presence: true
  validates :seller_id, presence: true
  validates :parent_category_id, presence: true
  validates :child_category_id, presence: true
  validates :grandchild_category_id, presence: true
end
