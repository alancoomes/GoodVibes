import React, { Component } from "react";
import AlbumCard from "./AlbumCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AlbumsIndex extends Component {
  render() {
    return (
      <div>
        <h1>Albums Index</h1>
        <Container fluid="md">
          <Row>
            {this.props.albums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default AlbumsIndex;
