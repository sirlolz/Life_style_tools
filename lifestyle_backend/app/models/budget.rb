class Budget < ApplicationRecord
    belongs_to :user

    def self.makeStuff(args)
        income = args['income']
        expense = args['expenses']
        left = income.to_i - expense.to_i
        saving = args['savings'].to_f * left
        if income.to_i < expense.to_i
            Budget.new(income: income, expenses: expense, savings: 0, investment: 0, user_id: args['user_id'])
        else
            Budget.new(income: income, expenses: expense, savings: saving, investment: args['investment'].to_f * left, user_id: args['user_id'])
        end
    end
end
