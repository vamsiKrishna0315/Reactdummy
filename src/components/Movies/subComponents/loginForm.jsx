import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });

    if (Object.keys(errors).length > 0) {
      return;
    }
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";
    return errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(name, value);

    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  validateProperty = (name, value) => {
    if (name === "username") {
      if (value.trim() === "") {
        return "Username is required";
      }
    }
    if (name === "password") {
      if (value.trim() === "") {
        return "Password is required";
      }
    }
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              value={account.username}
              name="username"
              id="username"
              type="text"
              className="form-control"
              placeholder="Enter the User Name"
              onChange={this.handleChange}
            />
            {errors.username && (
              <div className="alert alert-danger">{errors.username}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              name="password"
              id="password"
              type="password"
              className="form-control"
              placeholder="Enter the Your Password"
              onChange={this.handleChange}
            />
            {errors.password && (
              <div className="alert alert-danger">{errors.password}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
