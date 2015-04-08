class MailChimp
  def initialize
    @client = Gibbon::API.new
    @errors = []
  end

  attr_reader :errors

  def subscribe(list_id, user)
    begin
      @client.lists.subscribe({id: list_id, email: {email: user.email}, double_optin: false})
    rescue Gibbon::MailChimpError => e
      @errors << e.message
      false
    end
  end
end