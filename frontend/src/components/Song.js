import React from 'react'

export default function Song({ song }) {
    return (
        <div>
            <h1>{song.name}</h1>
            {/* <h2>{song.album}</h2> */}
            <h2>{song.genre}</h2>
        </div>
    )
}
