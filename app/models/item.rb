class Item < ApplicationRecord
  has_many    :categories, through: :item_categories
  has_many    :item_categories
  has_many    :images, dependent: :destroy
  belongs_to  :user
  has_one     :status, dependent: :destroy

  accepts_nested_attributes_for :images
end
