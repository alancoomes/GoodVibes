class AlbumsController < ApplicationController
    def index
        albums = Album.all 
        render json: albums
    end 

    def show
        album = Album.find_by_id(params[:id])
        render json: album
    end 
end
