import React from "react";
import { connect } from "react-redux";
import updateLoginForm from "../../redux/actions/loginForm";

const Login = ({ username, password, updateLoginForm }) => {
  return (
    <form onSubmit={}>
      <input
        placeholder="username"
        type="text"
        onChange={(event) => updateLoginForm(event)}
        name="username"
        value={username}
      ></input>
      <input
        placeholder="password"
        type="text"
        onChange={({ name, value }) => updateLoginForm({ name, value })}
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

export default connect(mapStateToProps, { updateLoginForm })(Login);
