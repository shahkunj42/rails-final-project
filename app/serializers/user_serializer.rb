class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :profile_image, :bio, :first_name, :last_name
end
