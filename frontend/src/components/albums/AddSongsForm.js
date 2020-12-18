import React, { Component } from "react";
import Checkbox from "../Checkbox";
import { connect } from "react-redux";
import { addSongsToAlbum } from "../../redux/actions/albumActions";

class AddSongsForm extends Component {
  state = {
    checkboxes: this.props.songs.reduce(
      (options, option) => ({
        ...options,
        [option.name]: false,
      }),
      {}
    ),
  };

  selectAllCheckboxes = (isSelected) => {
    Object.keys(this.state.checkboxes).forEach((checkbox) => {
      this.setState((prevState) => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected,
        },
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = (changeEvent) => {
    const { name } = changeEvent.target;

    this.setState((prevState) => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
    }));
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const checked = Object.keys(this.state.checkboxes).filter(
      (checkbox) => this.state.checkboxes[checkbox]
    );
    const addedSongs = this.props.songs.filter((song) =>
      checked.includes(song.name)
    );
    this.props.addSongsToAlbum(addedSongs, this.props.album);
  };

  createCheckbox = (song) => (
    <Checkbox
      label={song.name}
      isSelected={this.state.checkboxes[song.name]}
      onCheckboxChange={this.handleCheckboxChange}
      key={song.id}
    />
  );

  createCheckboxes = () => this.props.songs.map(this.createCheckbox);

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <div className="form-group mt-2">
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.selectAll}
                >
                  Select All
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.deselectAll}
                >
                  Deselect All
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addSongsToAlbum })(AddSongsForm);
