import React, { Component } from 'react'
import { connect } from 'react-redux'; 
import { getAlbums } from '../redux/actions/albumActions'
import AlbumListItem from '../components/albums/AlbumListItem'

class AlbumsIndex extends Component {

    componentDidMount() {
        this.props.getAlbums(); 
    }

    render() {
        return (
            <div>
                <h1>Albums Index</h1>
                {this.props.albums.map(album => <AlbumListItem album={album}/>)}
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
