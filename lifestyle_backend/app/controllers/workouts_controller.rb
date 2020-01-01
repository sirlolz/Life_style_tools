class WorkoutsController < ApplicationController
  before_action :set_workout, only: [:show, :update, :destroy]

  # GET /workouts
  def index
    @workouts = Workout.all

    render json: @workouts
  end

  # GET /workouts/1
  def show
    render json: @workout
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_workout
      @workout = Workout.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def workout_params
      params.require(:workout).permit(:plan, :description)
    end
end



chart.all.each do 
  if chart_id == current_id
    current_chart.recent == true
  else 
    cart.recent == false
  end
end
