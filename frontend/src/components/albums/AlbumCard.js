import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function AlbumListItem({ album }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={album.cover_art} />
      <Card.Body>
        <Card.Title>{album.name}</Card.Title>
        <Button variant="primary">More Info</Button>
      </Card.Body>
    </Card>
  );
}

{
  /* <Link key={album.id} to={`/albums/${album.id}`}>
          {album.name} - {album.genre}
        </Link> */
}
