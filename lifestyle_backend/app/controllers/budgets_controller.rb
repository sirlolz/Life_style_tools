class BudgetsController < ApplicationController
  before_action :set_budget, only: [:show, :update, :destroy]

  # GET /budgets
  def index
    @budgets = Budget.all

    render json: @budgets
  end

  # GET /budgets/1
  def show
    render json: @budget
  end

  # POST /budgets
  def create
    @budget = Budget.makeStuff(budget_params)

    if @budget.save
      render json: @budget, status: :created, location: @budget
    else
      render json: @budget.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /budgets/1
  def update
    budget = Budget.edit_stuff(budget_params)
    if @budget.update(budget)
      render json: @budget
    else
      render json: @budget.errors, status: :unprocessable_entity
    end
  end

  # DELETE /budgets/1
  def destroy
    @budget.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_budget
      @budget = Budget.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def budget_params
      params.require(:budget).permit(:income, :expenses, :savings, :investment, :user_id)
    end
end
