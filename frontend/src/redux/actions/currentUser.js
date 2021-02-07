// sync
export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user,
  };
};

//async
export const login = (credentials) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/users")
      .then((res) => res.json())
      .then((user) => dispatch({ type: "LOGIN_SUCCESS", payload: user }));
  };
};
