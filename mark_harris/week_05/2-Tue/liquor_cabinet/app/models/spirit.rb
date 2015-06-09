# == Schema Information
#
# Table name: spirits
#
#  id          :integer          not null, primary key
#  name        :string
#  type        :string
#  description :text
#  origin      :string
#  volume      :string
#  alcohol     :float
#  price       :float
#  created_at  :datetime
#  updated_at  :datetime
#



class Spirit < ActiveRecord::Base

end
