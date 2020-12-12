class CreateAlbums < ActiveRecord::Migration[6.0]
  def change
    create_table :albums do |t|
      t.string :name
      t.string :genre
      t.string :cover_art

      t.timestamps
    end
  end
end
