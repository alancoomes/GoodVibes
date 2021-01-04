import React, { Component } from "react";
import { connect } from "react-redux";
import { getAlbums, deleteAlbum } from "../redux/actions/albumActions";
import { Route, Switch } from "react-router-dom";
import AlbumShow from "../components/albums/AlbumShow";
import AlbumsForm from "../components/albums/AlbumsForm";
import AlbumsIndex from "../components/albums/AlbumsIndex";

class AlbumsContainer extends Component {
  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    const { albums } = this.props;
    return (
      <div>
        <Switch>
          <Route path="/albums/new" component={AlbumsForm} />
          <Route
            path="/albums/:albumId"
            render={(routerProps) => {
              const album = albums.find(
                (album) =>
                  album.id === parseInt(routerProps.match.params.albumId)
              );
              return (
                <AlbumShow
                  {...routerProps}
                  album={album}
                  songs={this.props.songs}
                  deleteAlbum={this.props.deleteAlbum}
                  addSongsToAlbum={this.props.addSongsToAlbum}
                />
              );
            }}
          />{" "}
          <Route
            path="/albums"
            render={(routerProps) => (
              <AlbumsIndex {...routerProps} albums={this.props.albums} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ albums, songs }) => {
  return {
    albums: albums.all,
    songs: songs.all,
  };
};

export default connect(mapStateToProps, {
  getAlbums,
  deleteAlbum,
})(AlbumsContainer);
