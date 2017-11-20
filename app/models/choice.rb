class Choice < ApplicationRecord
  belongs_to :encounter

  validates :body, presence: true
  validates :next, presence: true
end
