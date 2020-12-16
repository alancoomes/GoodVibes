import React, { Component } from 'react'
import { connect } from 'react-redux'; 
import { getAlbums } from '../redux/actions/albumActions'
import AlbumListItem from '../components/albums/AlbumListItem'
import { Route } from 'react-router-dom'
import AlbumShow from '../components/albums/AlbumShow';

class AlbumsIndex extends Component {

    componentDidMount() {
        this.props.getAlbums(); 
    }

    render() {
        return (
            <div>
                <h1>Albums Index</h1>
                {this.props.albums.map(album => <AlbumListItem key={album.id} album={album}/>)}
                <Route path="/albums/:albumId" render={(routerProps) => <AlbumShow {...routerProps} albums={this.props.albums} />}/>
            </div>
        )
    }
}

const mapStateToProps = ({albums}) => {
    return{
        albums: albums.all,
    }
}

export default connect(mapStateToProps, { getAlbums })(AlbumsIndex);
