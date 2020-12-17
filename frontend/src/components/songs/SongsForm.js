import React, { Component } from "react";
import { connect } from "react-redux";
import { createSong } from "../../redux/actions/songActions";

class SongsForm extends Component {
  state = {
    name: "",
    genre: "",
    vibe: "",
    bpm: 0,
    lyrics: "",
  };

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleOnSubmit(e) {
    e.preventDefault(e);
    this.props.createSong(this.state);
    this.setState({
      name: "",
      genre: "",
      vibe: "",
      bpm: 0,
      lyrics: "",
    });

    this.props.history.push("/songs");
  }

  render() {
    return (
      <div>
        <h1>Songs Form</h1>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          Name:{" "}
          <input
            type="text"
            name="name"
            onChange={(e) => this.handleOnChange(e)}
            value={this.state.name}
          />
          Genre:{" "}
          <input
            type="text"
            name="genre"
            onChange={(e) => this.handleOnChange(e)}
            value={this.state.genre}
          />
          Vibe:{" "}
          <input
            type="text"
            name="vibe"
            onChange={(e) => this.handleOnChange(e)}
            value={this.state.vibe}
          />
          BPM:{" "}
          <input
            type="number"
            name="bpm"
            onChange={(e) => this.handleOnChange(e)}
            value={this.state.bpm}
          />
          Lyrics:{" "}
          <input
            type="text"
            name="lyrics"
            onChange={(e) => this.handleOnChange(e)}
            value={this.state.lyrics}
          />
          <input type="submit" value="Create Song" />
        </form>
      </div>
    );
  }
}

export default connect(null, { createSong })(SongsForm);
