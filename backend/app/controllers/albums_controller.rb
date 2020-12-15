class AlbumsController < ApplicationController

    before_action :set_album, only: [:show, :update, :destroy]

    def index
        @albums = Album.all 
        render json: AlbumSerializer.new(@albums).to_serialized_json
    end 

    def show
        render json: AlbumSerializer.new(@album).to_serialized_json
    end 

    def create
        @album = Album.new(album_params)

        if @album.save
            render json: AlbumSerializer.new(@album).to_serialized_json
        else 
            render @album.errors.full_messages, status: :unprocessable_entity
        end 
    end 

    def update
        if @album.update(album_params)
            render json: AlbumSerializer.new(@album).to_serialized_json 
        else 
            render @album.errors.full_messages, status: :unprocessable_entity
        end 
    end 

    def destroy
        @album.destroy 
    end 

    private

    def set_album
        @album = Album.find_by_id(params[:id])
    end 

    def album_params
        params.require(:album).permit(
            :name,
            :genre,
            :cover_art,
            :songs_attributes[:id, :name, :genre, :vibe, :bpm, :lyrics]
        )
    end

end
