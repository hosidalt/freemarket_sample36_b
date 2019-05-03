class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :omniauthable
  validates :nickname, presence: true, length: { maximum: 20 }

  has_many :items
  has_many :sns_credential
  has_many :cards
en

