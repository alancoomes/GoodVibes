import React, { Component } from "react";
import { connect } from "react-redux";
import { getSongs, deleteSong } from "../redux/actions/songActions";
import { Route, Switch } from "react-router-dom";
import SongShow from "../components/songs/SongShow";
import SongsForm from "../components/songs/SongsForm";
import SongsIndex from "../components/songs/SongsIndex";

class SongsContainer extends Component {
  componentDidMount() {
    this.props.getSongs();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/songs/new" component={SongsForm} />
          <Route
            exact
            path="/songs/:songId"
            render={(routerProps) => (
              <SongShow
                {...routerProps}
                songs={this.props.songs}
                albums={this.props.albums}
                deleteSong={this.props.deleteSong}
              />
            )}
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
