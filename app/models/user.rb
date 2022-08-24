class User < ApplicationRecord
    has_many :cheeps
    has_many :replies
    has_secure_password

    acts_as_follower
    acts_as_followable
    acts_as_liker


  PASSWORD_REQUIREMENTS = /\A
  (?=.{8,})          # Must contain 8 or more characters
  (?=.*\d)           # Must contain a digit
  (?=.*[a-z])        # Must contain a lower case character
  (?=.*[A-Z])        # Must contain an upper case character
  (?=.*[[:^alnum:]]) # Must contain a symbol
/x

    validates :username, :password, :first_name, :last_name, :password_confirmation, presence: true
    validates :username, uniqueness: true
    validates :password, format: { with: PASSWORD_REQUIREMENTS }, on: :create 

   
  # def feed
  #     user_feed = self.followees(User).all.map { |user| user.cheeps.map { |cheep| cheep.cheep } }
  # end


end
