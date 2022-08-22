class User < ApplicationRecord
    has_many :cheeps
    has_many :replies
end
