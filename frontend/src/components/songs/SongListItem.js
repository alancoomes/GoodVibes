import React from 'react'

export default function SongListItem({ song }) {
    return (
        <div>
            {song.name} - {song.genre}
        </div>
    )
}
 