import React, { Component } from "react";
import { connect } from "react-redux";
import { getSongs } from "../redux/actions/songActions";
import SongListItem from "../components/songs/SongListItem";
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
              <SongShow {...routerProps} songs={this.props.songs} />
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

const mapStateToProps = ({ songs }) => {
  return {
    songs: songs.all,
  };
};

export default connect(mapStateToProps, { getSongs })(SongsContainer);
