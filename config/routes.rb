Rails.application.routes.draw do
  root 'splash#show'
  post '/signup' => 'signup#create', as: :signup
  get '/manifesto' => 'splash#manifesto', as: :manifesto
end
