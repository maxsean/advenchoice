class Journal < ApplicationRecord
  belongs_to :character
  belongs_to :encounter

  validates :body, presence: true
  validates :date, presence: true
end
