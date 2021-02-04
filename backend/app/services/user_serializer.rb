class UserSerializer

    def initialize(user_obj)
        @user = user_obj
    end


    def to_serialized_json
        options = {
          include: {
              albums: {
                only: [:id, :name, :genre, :cover_art, :album_id, :user_id]
              },
              songs: {
                only: [:id, :name, :genre, :vibe, :bpm, :lyrics, :album_id, :user_id]
              }
           },
           except: [:password_digest, :updated_at]
        }
        @user.to_json(options)
      end

end 