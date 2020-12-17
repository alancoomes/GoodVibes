import React, { Component } from "react";

class SongShow extends Component {
  render() {
    debugger;
    let song = this.props.songs[this.props.match.params.songId - 1];
    return (
      <div>
        <h1>Song Show Component</h1>
        <h1>{song.name}</h1>
        <h2>{song.album}</h2>
        <h2>{song.genre}</h2>
        <h4>{song.vibe}</h4>
        <p>{song.lyrics}</p>
      </div>
    );
  }
}

export default SongShow;
