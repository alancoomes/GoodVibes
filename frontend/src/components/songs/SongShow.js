import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class SongShow extends Component {
  deleteOnClick = () => {
    this.props.deleteSong(this.props.match.params.songId, this.props.history);
    // this.props.history.push("/songs");
  };

  editOnClick = () => {};

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
        <h2>{album ? `Album: ${album.name}` : "No Album yet!"}</h2>
        <h2>Genre: {song.genre}</h2>
        <h4>Vibe: {song.vibe}</h4>
        <p>Lyrics: {song.lyrics}</p>
        <Button
          type="click"
          onClick={this.deleteOnClick}
          variant="outline-danger"
        >
          Delete Song
        </Button>
        {/* <button type="click" onClick={this.editOnClick}>
          Edit Song
        </button> */}
      </div>
    );
  }
}

export default SongShow;
