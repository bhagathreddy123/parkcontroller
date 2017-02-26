class Product < ActiveRecord::Base
	belongs_to :category
	attr_accessor :new_category_name
	before_save :create_new_category

	def create_new_category
	create_category(:name=>new_category_name) unless new_category_name.blank?
	end
end
