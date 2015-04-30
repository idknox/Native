class SignupController < ApplicationController
  def create
    signup = Signup.new(signup_params)

    if signup.save
      mailchimp_subscribe(signup)
      SignupMailer.confirm_signup(signup.email).deliver
      render json: {success: true}
    else
      render json: {error: signup.errors.messages.first}
    end
  end

  private

  def signup_params
    params.require(:signup).permit(:email)
  end

  def mailchimp_subscribe(user)
    mc = MailChimp.new
    mc.subscribe('5cf614ed3c', user)
  end
end