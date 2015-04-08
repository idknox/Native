class SignupController < ApplicationController
  def create
    signup = Signup.new(email: params[:email])

    if signup.save
      mailchimp_subscribe(signup)
      render json: {success: true}
    else
      render json: {error: signup.errors.messages.first}
    end
  end

  private

  def mailchimp_subscribe(user)
    mc = MailChimp.new
    mc.subscribe('5cf614ed3c', user)
  end
end