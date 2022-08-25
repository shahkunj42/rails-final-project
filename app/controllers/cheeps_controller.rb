class CheepsController < ApplicationController

    def index 
        render json: Cheep.all
    end

    def create 
        cheep = @current_user.cheeps.create!(cheep_params)
        render json: cheep, status: :created 
    end

    def update
        cheep = Cheep.find(params[:id])
        @current_user.toggle_like!(cheep)
        render json: cheep, status: 202
    end

    private 

    def cheep_params 
        params.permit(:cheep, :likes)
    end

end
