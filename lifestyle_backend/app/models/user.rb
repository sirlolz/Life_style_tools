class User < ApplicationRecord
    has_secure_password
    has_many :budgets
    # validates :username, uniqueness: true
end
