class Job < ApplicationRecord
  validates :title, :company, :level, :description, :city, :state, presence: true
  belongs_to :user
end
