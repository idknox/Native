Rails.application.routes.draw do
  root 'splash#show'
  post '/signup' => 'signup#create', as: :signup
end
