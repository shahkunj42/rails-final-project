class CheepsController < ApplicationController

    def index 
        render json: Cheep.all
    end

    def create 
        cheep = @current_user.cheeps.create!(cheep_params)
        render json: cheep, status: :created 
    end

    private 

    def cheep_params 
        params.permit(:cheep, :likes)
    end

end
