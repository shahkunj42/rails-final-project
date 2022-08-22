class Cheep < ApplicationRecord
  belongs_to :user
  has_many :replies

  acts_as_likeable
end
