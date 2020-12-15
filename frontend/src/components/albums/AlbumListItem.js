import React from 'react'

export default function AlbumListItem({ album }) {
    return (
        <div>
            {album.name} - {album.genre}
        </div>
    )
}
 