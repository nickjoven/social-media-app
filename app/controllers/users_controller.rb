class UsersController < ApplicationController
    
    def login
        user = User.find_by!(email: params[:email])
        if user && user.password_digest == params[:password]
            render json: user, status: :ok
        else
            render json: {error: 'Invalid email password'}, status: 404
        end
    end

    def forgot_password
        user = User.find_by!(email: params[:email])
        render json: {password: user.password_digest}, status: :ok
    end
end
