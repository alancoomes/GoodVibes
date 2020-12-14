class SongsController < ApplicationController

    before_action :set_song, only: [:show, :update, :destroy]

    def index
        songs = Song.all 
        render json: songs
    end 

    def show
        render json: song
    end 

    def create 
        song = Song.new(song_params)

        if song.save 
            render json: song
        else 
            render song.errors.full_messages, status: :unprocessable_entity
        end 
    end 

    def update
        if song.update(song_params) 
            render json: song 
        else 
            render song.errors.full_messages, status: :unprocessable_entity
        end 
    end 

    def destroy
        song.destroy 
    end 

    private

    def set_song
        song = Song.find_by_id(params[:id])
    end 

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
