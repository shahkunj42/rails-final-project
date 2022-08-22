class CheepSerializer < ActiveModel::Serializer
  attributes :id, :cheep, :likes
  has_one :user
end
