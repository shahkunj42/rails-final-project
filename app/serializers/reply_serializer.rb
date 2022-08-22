class ReplySerializer < ActiveModel::Serializer
  attributes :id, :reply, :likes
  has_one :cheep
  has_one :user
end
