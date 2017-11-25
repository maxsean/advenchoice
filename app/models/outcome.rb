class Outcome < ApplicationRecord
  belongs_to :choice

  validates :body, presence: true
end
