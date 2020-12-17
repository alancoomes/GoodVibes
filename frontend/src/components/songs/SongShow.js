import React, { Component } from "react";

class SongShow extends Component {
  handleOnClick = () => {
    this.props.deleteSong(this.props.match.params.songId);
    this.props.history.push("/songs");
  };

  render() {
    let song = this.props.songs.filter(
      (song) => song.id === Number(this.props.match.params.songId)
    )[0];
    let album = this.props.albums.filter(
      (album) => album.id === song.album_id
    )[0];
    return (
      <div>
        <h1>Song Show Component</h1>
        <h1>Song: {song.name}</h1>
        {/* <h2>Album: {album.name}</h2> */}
        <h2>Genre: {song.genre}</h2>
        <h4>Vibe: {song.vibe}</h4>
        <p>Lyrics: {song.lyrics}</p>
        <button type="click" onClick={this.handleOnClick}>
          Delete Song
        </button>
      </div>
    );
  }
}

export default SongShow;
