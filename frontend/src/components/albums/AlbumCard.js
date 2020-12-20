import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function AlbumListItem({ album }) {
  return (
    <div>
      <Card key={album.id} style={{ width: "16rem" }}>
        <Card.Img variant="top" src={album.cover_art} />
        <Card.Body>
          <Card.Title>{album.name}</Card.Title>
          <Link key={album.id} to={`/albums/${album.id}`}>
            More Info
          </Link>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}
