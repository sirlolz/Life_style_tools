class AuthController < ApplicationController
    skip_before_action :authorized

    def create
        puts "####################################################################################################"
        puts params
        puts "####################################################################################################"
        @user = User.find_by(username: user_login_params[:username])
        if @user && @user.authenticate(user_login_params[:password])
            token = encode_token({ user_id: @user.id })
            render json: { user: UserSerializer.new(@user), jwt:token }, status: :accepted
        else
            render json: { message: 'Invlid username or password' }, status: :unauthorized
        end
    end

    private
    def user_login_params
        params.require(:user).permit(:username, :password)
    end
end
