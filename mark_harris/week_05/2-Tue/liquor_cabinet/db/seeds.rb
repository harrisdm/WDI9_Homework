# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Spirit.destroy_all

Spirit.create :name => "Bulleit Bourbon", :variety => "Bourbon", :origin => "USA", :volume => "700ml", :alcohol => 40, :price => 45
Spirit.create :name => "42 Below Pure Vodka", :variety => "Vodka", :origin => "New Zealand", :volume => "700ml", :alcohol => 40, :price => 45
Spirit.create :name => "PATRON - ANEJO", :variety => "Tequila", :origin => "Mexico", :volume => "750ml", :alcohol => 40, :price => 87.99
Spirit.create :name => "Chivas Regal Extra", :variety => "Scotch", :origin => "Scotland", :volume => "700ml", :alcohol => 40, :price => 55
Spirit.create :name => "Jameson Irish Whiskey", :variety => "Irish Whiskey", :origin => "Ireland", :volume => "700ml", :alcohol => 40, :price => 43


#  name        :string
#  type        :string
#  description :text
#  origin      :string
#  volume      :string
#  alcohol     :float
#  price       :float