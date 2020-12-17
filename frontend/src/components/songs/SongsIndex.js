import React, { Component } from "react";
import SongListItem from "./SongListItem";

class SongsIndex extends Component {
  render() {
    return (
      <div>
        <h1>Songs Index</h1>
        {this.props.songs.map((song) => (
          <SongListItem key={song.id} song={song} />
        ))}
      </div>
    );
  }
}

export default SongsIndex;
