import React, { Component } from "react";
import Input from "./input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const username = this.username.current.value;
    const password = this.password.current.value;
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    // account.username = e.currenttarget.value;
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            label="User Name"
            value={account.username}
            name="username"
            type="text"
            placeholder="Enter the User Name"
            onChange={this.handleChange}
          />
          <Input
            label="Password"
            value={account.password}
            name="password"
            type="password"
            placeholder="Enter the Your Password"
            onChange={this.handleChange}
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
