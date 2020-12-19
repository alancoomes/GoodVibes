import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function AlbumListItem({ album }) {
  return (
    <Card key={album.id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={album.cover_art} />
      <Card.Body>
        <Card.Title>{album.name}</Card.Title>
        <Link key={album.id} to={`/albums/${album.id}`}>
          More Info
        </Link>
      </Card.Body>
    </Card>
  );
}
