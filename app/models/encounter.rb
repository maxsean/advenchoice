class Encounter < ApplicationRecord
  has_many :choices
  has_many :revelations

  validates :body, presence: true
end
