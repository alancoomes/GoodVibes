class Album < ApplicationRecord
    has_many :songs, dependent: :delete_all
    belongs_to :user

    # accepts_nested_attributes_for :songs
end
