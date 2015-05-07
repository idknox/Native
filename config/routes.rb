Rails.application.routes.draw do
  root 'splash#show'
  post '/signup' => 'signup#create', as: :signup
  get '/vision' => 'splash#vision', as: :vision
  get '/team' => 'splash#team', as: :team
end
