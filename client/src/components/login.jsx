import React, { Component } from "react";

class Login extends Component {
  state = { access: { username: "", password: "" } };

  handleSubmit = e => {
    e.preventDefault();
    console.log("login enviado");
  };

  handleChange = e => {
    const access = { ...this.state.access };
    access[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ access });
  };

  render() {
    return (
      <div className="jumbotron m-4">
        <h1>LOGIN</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={this.state.access.username}
              onChange={this.handleChange}
              autoFocus
              id="username"
              name="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={this.state.access.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              type="password"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
