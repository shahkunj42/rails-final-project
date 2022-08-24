class CheepSerializer < ActiveModel::Serializer
  attributes :id, :cheep, :likes, :created_at, :user_id 
  has_one :user
end
