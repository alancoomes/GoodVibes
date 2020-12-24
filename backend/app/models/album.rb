class Album < ApplicationRecord
    has_many :songs, dependent: :delete_all


    # accepts_nested_attributes_for :songs
end
