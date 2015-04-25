class SplashController < ApplicationController
  def show
    @signups = Signup.all
  end

  def manifesto

  end
end