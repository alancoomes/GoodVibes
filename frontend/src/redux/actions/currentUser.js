// sync
export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user,
  };
};

//async
export const login = (cred) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/login"),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: cred.username,
          password: cred.password,
        }),
      }
        .then((res) => res.json())
        .then((user) => dispatch({ type: "LOGIN_SUCCESS", payload: user }));
  };
};
