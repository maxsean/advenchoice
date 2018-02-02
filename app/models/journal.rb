class Journal < ApplicationRecord
  belongs_to :user
  belongs_to :revelation

  validates :user_id, uniqueness: { scope: :revelation_id }
end
