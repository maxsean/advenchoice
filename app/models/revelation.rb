class Revelation < ApplicationRecord
  belongs_to :user
  belongs_to :journal

  validates :user_id, uniqueness: { scope: :journal_id }
end
