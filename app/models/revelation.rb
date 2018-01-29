class Revelation < ApplicationRecord
  belongs_to :character
  belongs_to :encounter

  validaties :body, presence: true
end
