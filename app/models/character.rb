class Character < ApplicationRecord
  has_many :journals
  validates :name, presence: true
end
