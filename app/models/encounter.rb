class Encounter < ApplicationRecord
  has_many :choices
  has_many :journals

  validates :body, presence: true
end
