function userReducer(state = { all: [] }, action) {
  switch (action.type) {
    case "FETCH_USERS_SUCCESS":
      return { ...state, all: action.payload };

    case "CREATE_USER_SUCCESS":
      return { ...state, all: state.all.concat(action.payload) };

    case "DELETE_USER_SUCCESS":
      return {
        ...state,
        all: state.all.filter((user) => user.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export default userReducer;
