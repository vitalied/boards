class List < ApplicationRecord

  belongs_to :board
  has_many :tasks, dependent: :delete_all

  default_scope { order(:position) }

  validates :name, :position, presence: :true, uniqueness: { scope: :board_id }

end
