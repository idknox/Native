class SignupPreview < ActionMailer::Preview
  # Accessible from http://localhost:3000/rails/mailers/notifier/welcome
  def confirm_signup
    SignupMailer.confirm_signup('test@test.com')
  end
end