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
    default:
      return state;
  }
}

export default songReducer;
