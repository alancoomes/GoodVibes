import React, { Component } from "react";
import { Link } from "react-router-dom";

class AlbumShow extends Component {
  render() {
    let album = this.props.albums[this.props.match.params.albumId - 1];
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
        </div>
      </div>
    );
  }
}

export default AlbumShow;

// .map(song => <li><Link to={`/songs/${song.id}`} >{song.name}</Link></li>
