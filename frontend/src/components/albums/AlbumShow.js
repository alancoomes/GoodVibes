import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddSongsForm from "./AddSongsForm";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";

class AlbumShow extends Component {
  handleOnClick = () => {
    const album = this.props.album;
    if (album.songs) {
      album.songs.map((song) => (song.album_id = null));
    }
    this.props.deleteAlbum(album.id, this.props.history);
  };

  render() {
    debugger;
    const album = this.props.album;
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={
                  album.cover_art
                    ? album.cover_art
                    : "http://placehold.it/500x325"
                }
                alt="album cover art"
              />
            </Card>
          </Col>
          <Col>
            <h1>{album.name}</h1>
            <h4>{album.genre}</h4>
            <div>
              {album.songs.map((song) => (
                <li key={song.id}>
                  <Link key={song.id} to={`/songs/${song.id}`}>
                    {song.name}
                  </Link>
                </li>
              ))}
            </div>
            <h2>Add Songs to Album</h2>
            <AddSongsForm
              songs={this.props.songs.filter((song) => !song.album_id)}
              album={album}
            />
          </Col>
        </Row>
        <br />
        <Button
          type="click"
          onClick={this.handleOnClick}
          variant="outline-danger"
        >
          Delete Album
        </Button>
      </Container>
    );
  }
}

export default AlbumShow;
