import React, { Component } from "react";
import AlbumCard from "./AlbumCard";

class AlbumsIndex extends Component {
  render() {
    return (
      <div>
        <h1>Albums Index</h1>
        {this.props.albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    );
  }
}

export default AlbumsIndex;
