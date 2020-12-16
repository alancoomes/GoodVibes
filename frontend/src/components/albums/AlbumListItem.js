import React from 'react'
import { Link } from 'react-router-dom'


export default function AlbumListItem({ album }) {
    return (
        <div>
            <li><Link key={album.id} to={`/albums/${album.id}`}>{album.name} - {album.genre}</Link></li>
        </div>
    )
}
 