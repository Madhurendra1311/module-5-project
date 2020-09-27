import React from "react";
import { AppContext } from "../Context/AppContext";
import { Redirect } from "react-router-dom";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { checkUserAuthentication } = this.context;
    checkUserAuthentication({ email, password });
  };
  render() {
    const { email, password } = this.state;
    const { isAuth } = this.context;

    if (isAuth) {
      return (
        <Redirect
          push
          to={{
            pathname: "/iPad",
            state: {
              email,
              password,
              from: "login page"
            }
          }}
        />
      );
    }

    return (
        <div>
            <h1>User Login</h1>
            <form onSubmit={this.handleSubmit}>
                Email:<br/><input
                value={email}
                name="email"
                placeholder="email"
                onChange={this.handleChange}
                />
                <br/>
                Password:<br/><input
                value={password}
                name="password"
                placeholder="password"
                onChange={this.handleChange}
                />
                <br />
                <input type="submit" />
            </form>
      </div>
    );
  }
}

Login.contextType = AppContext;