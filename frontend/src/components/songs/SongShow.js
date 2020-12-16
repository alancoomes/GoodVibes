import React from 'react'

class SongShow extends React.Component {

    render(){
        ({ song }) = this.props
    return (
        <div>
            <h1>{song.name}</h1>
            <h2>{song.album}</h2>
            <h2>{song.genre}</h2>
            <h4>{song.vibe}</h4>
            <p>{song.lyrics}</p>
        </div>
        )
    }
}

export default SongShow;
