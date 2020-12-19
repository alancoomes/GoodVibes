function albumReducer(state = { all: [] }, action) {
  switch (action.type) {
    case "FETCH_ALBUMS_SUCCESS":
      return { ...state, all: action.payload };

    case "CREATE_ALBUM_SUCCESS":
      return { ...state, all: state.all.concat(action.payload) };

    case "DELETE_ALBUM_SUCCESS":
      return {
        ...state,
        all: state.all.filter((album) => album.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export default albumReducer;
