export const getSongs = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/songs")
      .then((res) => res.json())
      .then((songs) =>
        dispatch({ type: "FETCH_SONGS_SUCCESS", payload: songs })
      );
  };
};

export const createSong = (data) => {
  return (dispatch) => {
    const song = { song: data };
    fetch("http://localhost:3000/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(song),
    })
      .then((res) => res.json())
      .then((song) => dispatch({ type: "CREATE_SONG_SUCCESS", payload: song }));
  };
};
