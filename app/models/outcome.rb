class Outcome < ApplicationRecord
  belongs_to encounter
  belongs_to choice

  validates :body, presence: true
end
