class Character < ApplicationRecord
  has_many :revelations
  validates :name, presence: true
end
