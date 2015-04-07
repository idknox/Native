class Signup < ActiveRecord::Base
  validates :email, presence: true, uniqueness: {message: 'is already signed up'}

  validate :is_valid_email_address?

  def is_valid_email_address?
    errors.add(:email, 'must be valid') unless email =~ /\A\S+@.+\.\S+\z/
  end

end