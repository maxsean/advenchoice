class Choice < ApplicationRecord
  belongs_to :encounter
  has_many :outcomes

  validates :body, presence: true
  validates :next, presence: true
end
