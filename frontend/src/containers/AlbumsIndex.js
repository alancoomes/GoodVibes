import React, { Component } from 'react'
import { connect } from 'react-redux'; 
import { getAlbums } from '../redux/actions/albumActions'
import AlbumListItem from '../components/albums/AlbumListItem'
import { Link, Route } from 'react-router-dom'
import AlbumShow from '../components/albums/AlbumShow';

class AlbumsIndex extends Component {

    componentDidMount() {
        this.props.getAlbums(); 
    }

    render() {
        return (
            <div>
                <h1>Albums Index</h1>
                {this.props.albums.map(album => <li><Link key={album.id} to={`/albums/${album.id}`}>{album.name} - {album.genre}</Link></li>)}
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
