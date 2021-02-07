import React from "react";
import { connect } from "react-redux";

const Login = ({ username, password }) => {
  return (
    <form onSubmit={}>
      <input
        placeholder="username"
        type="text"
        onChange={}
        name="username"
        value={username}
      ></input>
      <input
        placeholder="password"
        type="text"
        onChange={}
        name="password"
        value={password}
      ></input>
      <input type="submit" value="Login" />
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.loginForm.username,
    password: state.loginForm.password,
  };
};

export default connect(mapStateToProps)(Login);
