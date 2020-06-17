import React, { Component } from 'react';
import LoginForm from '../../Components/Login/LoginForm';
import ValidationError from '../../Errors/ValidationError';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  handleLoginSuccess = (message) => {
    const { history } = this.props;
    history.push('/dashboard');
    window.location.reload();
  };

  handleLoginFail = (message) => {
    this.setState({
      error: message,
    });

    const { history } = this.props;
    history.push('/login');
  };

  render() {
    return (
      <>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
          onLoginFail={this.handleLoginFail}
        />
        {this.state.error && <ValidationError render={this.state.error} />}
      </>
    );
  }
}
