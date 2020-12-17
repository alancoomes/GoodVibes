import React, { Component } from "react";
import AlbumListItem from "./AlbumListItem";

class AlbumsIndex extends Component {
  render() {
    return (
      <div>
        <h1>Albums Index</h1>
        {this.props.albums.map((album) => (
          <AlbumListItem key={album.id} album={album} />
        ))}
      </div>
    );
  }
}

export default AlbumsIndex;
