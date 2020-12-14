class SongsController < ApplicationController
    def index
        songs = Song.all 
        render json: songs
    end 

    def show
        song = Song.find_by_id(params[:id])
        render json: song
    end 

    def create 
        song = Song.new(song_params)

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
