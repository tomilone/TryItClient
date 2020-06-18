import React, { Component } from 'react';
import userApiService from '../../services/user-api-service';
import './Form.css';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { user, pass } = this.state;

    const data = {
      userName: user,
      userPass: pass,
    };

    userApiService.loginUser(
      data,
      this.props.onLoginSuccess,
      this.props.onLoginFail
    );
    this.setState({
      user: '',
      pass: '',
    });
  };

  render() {
    return (
      <div className="login">
        <form className="logForm" onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="userName">User Name</label>
          <input
            name="userName"
            type="text"
            aria-label="username"
            placeholder="user-name"
            onChange={(e) => this.setState({ user: e.target.value })}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="text"
            aria-label="password"
            placeholder="password"
            onChange={(e) => this.setState({ pass: e.target.value })}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
