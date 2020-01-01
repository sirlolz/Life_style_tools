class ExercisesController < ApplicationController
  before_action :set_exercise, only: [:show, :update, :destroy]

  # GET /exercises
  def index
    @exercises = Exercise.all

    render json: @exercises
  end

  # GET /exercises/1
  def show
    render json: @exercise
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exercise
      @exercise = Exercise.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def exercise_params
      params.require(:exercise).permit(:name, :img, :description)
    end
end
