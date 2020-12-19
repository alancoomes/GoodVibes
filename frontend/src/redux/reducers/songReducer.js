function songReducer(state = { all: [] }, action) {
  switch (action.type) {
    case "FETCH_SONGS_SUCCESS":
      return { ...state, all: action.payload };

    case "CREATE_SONG_SUCCESS":
      return { ...state, all: state.all.concat(action.payload) };

    case "DELETE_SONG_SUCCESS":
      return {
        ...state,
        all: state.all.filter((song) => song.id !== action.payload.id),
      };
    case "ADD_SONG_TO_ALBUM_SUCCESS":
      return {
        ...state,
        all: state.all.map((song) => {
          if (song.id === action.payload.id) {
            return {
              ...song,
              album_id: action.payload.album_id,
            };
          } else return song;
        }),
      };
    default:
      return state;
  }
}

export default songReducer;
