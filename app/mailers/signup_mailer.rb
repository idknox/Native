class SignupMailer < ActionMailer::Base
  default from: "team@niletravelapp.com"

  def confirm_signup(email)
    mail(to: email, subject: 'Thanks for signing up!')
  end
end
