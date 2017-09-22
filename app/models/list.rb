class List < ApplicationRecord

  belongs_to :board

  default_scope { order(:position) }

  validates :name, :position, presence: :true, uniqueness: { scope: :board_id }

end
