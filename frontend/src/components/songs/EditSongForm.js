import React, { Component } from "react";
import { connect } from "react-redux";

class EditSongForm extends Component {
  render() {
    debugger;
    return (
      <div>
        <h1>Add a Song</h1>
        <Container>
          <Form onSubmit={(e) => this.handleOnSubmit(e)}>
            <Form.Group containerId="form.songName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={(e) => this.handleOnChange(e)}
                value={this.state.name}
              />
            </Form.Group>
            <Form.Group containerId="form.songGenre">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                name="genre"
                onChange={(e) => this.handleOnChange(e)}
                value={this.state.genre}
              />
            </Form.Group>
            <Form.Group containerId="form.songVibe">
              <Form.Label>Vibe</Form.Label>
              <Form.Control
                type="text"
                name="vibe"
                onChange={(e) => this.handleOnChange(e)}
                value={this.state.vibe}
              />
            </Form.Group>
            <Form.Group containerId="form.songBPM">
              <Form.Label>BPM (beats per minute)</Form.Label>
              <Form.Control
                type="number"
                name="bpm"
                onChange={(e) => this.handleOnChange(e)}
                value={this.state.bpm}
              />
            </Form.Group>
            <Form.Group containerId="form.songLyrics">
              <Form.Label>Lyrics</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="lyrics"
                onChange={(e) => this.handleOnChange(e)}
                value={this.state.lyrics}
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Create Song
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default connect(null, { updateSong })(EditSongForm);
