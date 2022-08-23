class RepliesController < ApplicationController

    def create 
        reply = @current_user.replies.create!(reply_params)
        render json: reply, status: :created
    end

    private
    def reply_params
        params.permit(:reply, :likes, :cheep_id)
    end
end
