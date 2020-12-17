import React from "react";
import { Link } from "react-router-dom";

export default function SongListItem({ song }) {
  return (
    <div>
      <li>
        <Link key={song.id} to={`/songs/${song.id}`}>
          {song.name} - {song.genre}
        </Link>
      </li>
    </div>
  );
}
