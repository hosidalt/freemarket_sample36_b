class Product < ApplicationRecord
  has_many :images, foreign_key: "item_id", dependent: :delete_all
  has_many :statuses, foreign_key: "item_id", dependent: :delete_all
  has_many :item_categories, foreign_key: "item_id", dependent: :delete_all
  belongs_to :user
  scope :get_random_product, -> (id){ where("parent_category_id = ?", id).order("RAND()").limit(4) }
end
