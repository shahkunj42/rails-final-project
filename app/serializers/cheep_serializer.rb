class CheepSerializer < ActiveModel::Serializer
  attributes :id, :cheep, :likers_count, :created_at, :user_id 
  has_one :user
end
