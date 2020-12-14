class AlbumsController < ApplicationController
    def index
        albums = Album.all 
        render json: albums
    end 

    def show
        album = Album.find_by_id(params[:id])
        render json: album
    end 

    def create
        album = Album.new(album_params)

        if album.save
            render json: album
        end 
    end 

    private

    def album_params
        params.require(:album).permit(
            :name,
            :genre,
            :cover_art
            :
        )
    end
end
