import React, { Component } from "react";
import { connect } from "react-redux";
import { createAlbum } from "../../redux/actions/albumActions";

class AlbumsForm extends Component {
  state = {
    name: "",
    genre: "",
    cover_art: "",
  };

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleOnSubmit(e) {
    e.preventDefault(e);
    this.props.createAlbum(this.state);
    this.setState({
      name: "",
      genre: "",
      cover_art: "",
    });

    this.props.history.push("/albums");
  }

  render() {
    return (
      <div>
        <h1>Albums Form</h1>
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
          Cover Art(optional):{" "}
          <input
            type="text"
            name="cover_art"
            onChange={(e) => this.handleOnChange(e)}
            value={this.state.cover_art}
          />
          <input type="submit" value="Create Album" />
        </form>
      </div>
    );
  }
}

export default connect(null, { createAlbum })(AlbumsForm);
