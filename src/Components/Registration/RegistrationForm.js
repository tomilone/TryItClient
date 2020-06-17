import React, { Component } from 'react';
import ValidationError from '../../Errors/ValidationError';
import userApiService from '../../services/user-api-service';
import '../Login/Form.css';

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      badEntry: false,
      error: '',
    };
  }

  validateEntry = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    if (password.length <= 5) {
      this.setState({
        error: 'password must be longer than 5 characters',
        badEntry: true,
        username: '',
        password: '',
      });
    } else if (username.length <= 2) {
      this.setState({
        error: 'please enter a longer username',
        badEntry: true,
        username: '',
        password: '',
      });
    } else {
      const data = {
        userName: username,
        userPass: password,
      };

      userApiService.createUser(
        data,
        this.props.onRegistrationSuccess,
        this.props.onRegistrationFail
      );
    }
  };

  render() {
    return (
      <section className="registration">
        <form
          className="regForm"
          onSubmit={(e) => {
            this.validateEntry(e);
          }}
        >
          <label for="user">User Name</label>
          <input
            type="text"
            name="user"
            aria-label="username"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <label for="pass">Password</label>
          <input
            type="text"
            name="pass"
            aria-label="password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button type="submit">Register</button>
          {this.state.badEntry && <ValidationError render={this.state.error} />}
        </form>
      </section>
    );
  }
}
