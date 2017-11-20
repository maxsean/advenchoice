class Encounter < ApplicationRecord
  has_many :choices

  validates :body, presence: true
end
