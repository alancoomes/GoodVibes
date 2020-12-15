class AlbumSerializer

    def initialize(album_obj)
        @album = album_obj
    end


    def to_serialized_json
        options = {
          include: {
            songs: {
              only: [:id, :name, :genre, :vibe, :bpm, :lyrics, :album_id]
            }
           }
        }
        @album.to_json(options)
      end

end 