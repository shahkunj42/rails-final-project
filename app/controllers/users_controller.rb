class UsersController < ApplicationController

    skip_before_action :authorize, only: :create 

    def index
        render json: User.all
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    def show 
        render json: @current_user
    end

    def feed
        render json: @current_user.followees(User), status: :ok
    end 

    def myCheeps 
        render json: @current_user.cheeps, status: :ok
    end 

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :profile_image, :bio, :first_name, :last_name)
    end

end
