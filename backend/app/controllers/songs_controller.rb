class SongsController < ApplicationController
    def index
        songs = Song.all 
        render json: songs
    end 

    def show
        song = Song.find_by_id(song_params])
        render json: song
    end 

    def create 
        song = Song.new(params[:song])

        if song.save 
            render json: song
        end 
    end 

    private

    def song_params
        params.require(:song).permit(
             :name,
             :genre,
             :vibe,
             :bpm,
             :lyrics
        )
    end 
end
