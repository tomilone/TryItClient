import React, { Component } from 'react';
import LoginForm from '../../Components/Login/LoginForm';
import ValidationError from '../../Errors/ValidationError';
import './LoginPage.css';

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
      <section>
        <div className="credentials">
          <h2>Please Use the following Credentials to Experience TryIt!</h2>
          <h3>
            <p>Username: demo</p>
            <p>Password: demopassword</p>
          </h3>
        </div>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
          onLoginFail={this.handleLoginFail}
        />
        {this.state.error && <ValidationError render={this.state.error} />}
      </section>
    );
  }
}
