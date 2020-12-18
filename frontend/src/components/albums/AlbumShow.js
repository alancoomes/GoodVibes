import React, { Component } from "react";
import { Link } from "react-router-dom";

class AlbumShow extends Component {
  handleOnClick = () => {
    let album = this.props.albums.filter(
      (album) => album.id === Number(this.props.match.params.albumId)
    )[0];
    if (album.songs) {
      album.songs.map((song) => song.album_id === null);
    }
    this.props.deleteAlbum(album.id, this.props.history);
    // this.props.history.push("/albums");
  };

  render() {
    let album = this.props.albums.filter(
      (album) => album.id === Number(this.props.match.params.albumId)
    )[0];
    return (
      <div>
        <h1>Album Show Component</h1>
        <img src={album.cover_art} alt="album cover art" />
        <h1>{album.name}</h1>
        <h4>{album.genre}</h4>
        <div>
          {album.songs.map((song) => (
            <li>
              <Link to={`/songs/${song.id}`}>{song.name}</Link>
            </li>
          ))}
          <button type="click" onClick={this.handleOnClick}>
            Delete Album
          </button>
        </div>
        <h2>Add Songs to Album</h2>
      </div>
    );
  }
}

export default AlbumShow;
