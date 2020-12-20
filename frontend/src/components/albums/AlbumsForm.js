import React, { Component } from "react";
import { connect } from "react-redux";
import { createAlbum } from "../../redux/actions/albumActions";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";

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
        <h1>Add An Album</h1>
        <Container>
          <Form onSubmit={(e) => this.handleOnSubmit(e)}>
            <Form.Group controlId="form.Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={(e) => this.handleOnChange(e)}
                value={this.state.name}
              />
            </Form.Group>
            <Form.Group controlId="form.Genre">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                name="genre"
                onChange={(e) => this.handleOnChange(e)}
                value={this.state.genre}
              />
            </Form.Group>
            <Form.Group controlId="form.Cover_Art">
              <Form.Label>Cover Art</Form.Label>
              <Form.Control
                type="text"
                name="cover_art"
                onChange={(e) => this.handleOnChange(e)}
                value={this.state.cover_art}
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Create Album
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default connect(null, { createAlbum })(AlbumsForm);
