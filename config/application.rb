require File.expand_path('../boot', __FILE__)

require 'rails/all'

Bundler.require(*Rails.groups)

module Native
  class Application < Rails::Application
    config.active_record.raise_in_transactional_callbacks = true
    config.assets.paths << Rails.root.join('app', 'assets', 'fonts')
  end
end
