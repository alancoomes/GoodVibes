import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Good Vibes</Navbar.Brand>
        <Nav className="mr-atoß">
          <Nav.Link href="/songs">Songs</Nav.Link>
          <Nav.Link href="/albums">Albums</Nav.Link>
          <Nav.Link href="/songs/new">Create a Song</Nav.Link>
          <Nav.Link href="/albums/new">Create an Album</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
