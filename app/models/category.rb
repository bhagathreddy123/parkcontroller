class Category < ActiveRecord::Base
	has_many :categories, :dependent => :destroy
end
