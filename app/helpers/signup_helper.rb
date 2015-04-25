module SignupHelper
  def follower_count
    Signup.count
  end
end