class Budget < ApplicationRecord
    belongs_to :user

    def self.makeStuff(args)
        i = args['income']
        e = args['expenses']
        left = i.to_i - e.to_i
        if i < e
            Budget.new(income: i, expenses: e, savings: 0, investment: 0, user_id: args['user_id'])
        else
            Budget.new(income: i, expenses: e, savings: args['savings']*left, investment: args['investment'] * left, user_id: args['user_id'])
        end
    end
end
