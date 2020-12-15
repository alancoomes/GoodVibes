import React from 'react'
import {Link} from 'react-router-dom';

export default function Album({ album }) {
    return (
        <div>
            <img src={album.cover_art} alt="album cover art" />
            <h1>{album.name}</h1>
            <h4>{album.genre}</h4>
            <ul>
                {/* {album.songs.map(song => <li><Link to={`/songs/${song.id}`} >{song.name}</Link></li>} */}
            </ul>
        </div>
    )
}
