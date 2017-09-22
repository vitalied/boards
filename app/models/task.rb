class Task < ApplicationRecord

  belongs_to :list

  default_scope { order(:position) }

  validates :name, :position, presence: :true, uniqueness: { scope: :list_id }

end
