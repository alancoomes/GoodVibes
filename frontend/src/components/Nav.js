import React from 'react'
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/songs">Songs</Link></li>
                <li><Link to="/albums">Albums</Link></li>
                <li><Link to="/songs/new">Create a Song</Link></li>
                <li><Link to="/albums/new">Create an Album</Link></li>
            </ul>
        </div>
    )
}
