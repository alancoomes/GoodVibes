import React, { Component } from "react";
import SongListItem from "./SongListItem";

class SongsIndex extends Component {
  state = {
    search: "",
  };

  handleOnChange(e) {
    this.setState({
      search: e.target.value,
    });
    // const songs = this.props.songs.filter((song) =>
    //   song.name.includes(this.state.search)
    // );
  }

  render() {
    const songs = this.props.songs.filter((song) =>
      song.name.includes(this.state.search)
    );
    return (
      <div>
        <h1>Songs Index</h1>
        <input
          type="text"
          name="search"
          onChange={(e) => this.handleOnChange(e)}
          value={this.state.search}
        />
        {songs.map((song) => (
          <SongListItem key={song.id} song={song} />
        ))}
      </div>
    );
  }
}

export default SongsIndex;
