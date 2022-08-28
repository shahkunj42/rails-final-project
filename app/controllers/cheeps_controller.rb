class CheepsController < ApplicationController

    def index 
        render json: Cheep.all
    end

    def create 
        cheep = @current_user.cheeps.create!(cheep_params)
        render json: cheep, status: :created 
    end

    def like
        cheep = Cheep.find(params[:id])
        @current_user.like!(cheep)
        render json: cheep.likers_count += 1, status: 202
    end

    def unlike
        cheep = Cheep.find(params[:id])
        @current_user.unlike!(cheep)
        render json: cheep.likers_count -= 1, status: 202
    end

    def destroy
        cheep = Cheep.find(params[:id])
        cheep.destroy
        head :no_content
    end

    private 

    def cheep_params 
        params.permit(:cheep, :likers_count)
    end

end
