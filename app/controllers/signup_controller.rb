class SignupController < ApplicationController
  def create
    signup = Signup.new(email: params[:email])

    if signup.save
      render json: {success: true}
    else
      render json: {error: signup.errors.messages.first}
    end
  end
end