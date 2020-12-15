import React, { Component } from 'react'
import { connect } from 'react-redux'; 
import { getSongs } from '../redux/actions/songActions'
import SongListItem from '../components/songs/SongListItem'

class SongsIndex extends Component {

    componentDidMount() {
        this.props.getSongs(); 
    }

    render() {
        return (
            <div>
                <h1>Songs Index</h1>
                {this.props.songs.map(song => <SongListItem song={song}/>)}
            </div>
        )
    }
}

const mapStateToProps = ({songs}) => {
    return{
        songs: songs.all,
    }
}

export default connect(mapStateToProps, { getSongs })(SongsIndex);
