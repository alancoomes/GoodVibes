export const getSongs = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/songs")
      .then((res) => res.json())
      .then((songs) =>
        dispatch({ type: "FETCH_SONGS_SUCCESS", payload: songs })
      );
  };
};

export const createSong = (data) => {
  return (dispatch) => {
    const song = { song: data };
    fetch("http://localhost:3000/api/v1/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(song),
    })
      .then((res) => res.json())
      .then((song) => {
        return dispatch({ type: "CREATE_SONG_SUCCESS", payload: song });
      });
  };
};

export const deleteSong = (id, history) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/songs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((song) => dispatch({ type: "DELETE_SONG_SUCCESS", payload: song }));
    history.push("/songs");
  };
};

export const addSongToAlbum = (song, album) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/songs/${song.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ album_id: album.id }),
    })
      .then((res) => res.json())
      .then((song) =>
        dispatch({ type: "ADD_SONG_TO_ALBUM_SUCCESS", payload: song })
      );
  };
};

export const updateSong = (song, id, history) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/songs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ song }),
    })
      .then((res) => res.json())
      .then((song) => dispatch({ type: "UPDATE_SONG_SUCCESS", payload: song }));
    history.push(`/songs/${id}`);
  };
};
