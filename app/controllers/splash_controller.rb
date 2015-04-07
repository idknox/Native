class SplashController < ApplicationController
  def show
    @signups = Signup.all
  end
end