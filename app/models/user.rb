class User < ApplicationRecord
  devise :database_authenticatable, :registerable,:recoverable, :rememberable, :validatable, :omniauthable, omniauth_providers: [:google_oauth2, :facebook]
  validates :nickname, presence: true, length: { maximum: 20 }

  has_many :cards
  has_many :sns_credentials, dependent: :destroy
end

