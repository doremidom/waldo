class WinnersController < ApplicationController
	def index
		@winners = Winner.all
	end

	def new
		@winner = Winner.new
	end

	def create
		@winner = Winner.new(winner_params)
		if @winner.save
			redirect_to winners_path
		else
			messages = @post.errors.full_messages.join(' ')
			flash.now[:warning] = "An error occurred. " + messages
			# render :new
		end
	end

	private

	def winner_params
		params.require(:winner).permit(:name, :start_time, :stop_time)
	end
end
