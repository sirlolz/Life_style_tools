class BudgetSerializer < ActiveModel::Serializer
  attributes :id, :income, :expenses, :savings, :investment, :user_id
end
