Rails.application.routes.draw do

  root :to => "spirits#index"

  get   "/spirits"            => "spirits#index"
  get   "/spirits/new"        => "spirits#new"
  post  "/spirits"            => "spirits#create",  :as => "spirit_create"
  get   "/spirits/:id"        => "spirits#show",    :as => "spirit"
  get   "/spirits/edit/:id"   => "spirits#edit",    :as => "spirit_edit"
  post  "/spirits/:id"        => "spirits#update",  :as => "spirit_update"
  post  "/spirits/delete/:id" => "spirits#delete",  :as => "spirit_delete"


end
