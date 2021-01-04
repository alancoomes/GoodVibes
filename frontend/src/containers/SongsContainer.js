import React, { Component } from "react";
import { connect } from "react-redux";
import { getSongs, deleteSong } from "../redux/actions/songActions";
import { Route, Switch } from "react-router-dom";
import SongShow from "../components/songs/SongShow";
import SongsForm from "../components/songs/SongsForm";
import SongsIndex from "../components/songs/SongsIndex";
import EditSongForm from "../components/songs/EditSongForm";

class SongsContainer extends Component {
  componentDidMount() {
    this.props.getSongs();
  }

  render() {
    const { songs } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path="/songs/new" component={SongsForm} />
          <Route
            exact
            path="/songs/:songId"
            render={(routerProps) => {
              let song = songs.find(
                (song) => song.id === parseInt(routerProps.match.params.songId)
              );
              return (
                <SongShow
                  {...routerProps}
                  song={song}
                  songs={songs}
                  albums={this.props.albums}
                  deleteSong={this.props.deleteSong}
                />
              );
            }}
          />
          <Route
            exact
            path="/songs/:songId/edit"
            render={(routerProps) => {
              return <EditSongForm {...routerProps} />;
            }}
          />
          <Route
            path="/songs"
            render={(routerProps) => (
              <SongsIndex {...routerProps} songs={this.props.songs} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ songs, albums }) => {
  return {
    songs: songs.all,
    albums: albums.all,
  };
};

export default connect(mapStateToProps, { getSongs, deleteSong })(
  SongsContainer
);
