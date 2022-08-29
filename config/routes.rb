Rails.application.routes.draw do
    resources :replies
    resources :cheeps
    resources :users

    post '/newaccount', to: 'users#create'
    get '/me', to: 'users#show'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    get '/feed', to: 'users#feed'
    get '/myCheeps', to: 'users#myCheeps'
    patch '/like/:id', to: 'cheeps#like'
    patch '/unlike/:id', to: 'cheeps#unlike'
    post '/follow', to: 'users#follow'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
