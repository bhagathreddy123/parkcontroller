class Contact < ActiveRecord::Base
  validates :name,:email,:message,:subject, :presence => true 
end
