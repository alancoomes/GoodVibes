import React, { Component } from 'react'
import { connect } from 'react-redux'; 
import { getSongs } from '../redux/actions/songActions'
import SongListItem from '../components/songs/SongListItem'
import { Route } from 'react-router-dom'
import SongShow from '../components/songs/SongShow';

class SongsIndex extends Component {

    componentDidMount() {
        this.props.getSongs(); 
    }

    render() {
        return (
            <div>
                <h1>Songs Index</h1>
                {this.props.songs.map(song => <SongListItem key={song.id} song={song}/>)}
                <Route exact path='/songs/:songId' render={routerProps => <SongShow {...routerProps} songs={this.props.songs} />}/>
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
