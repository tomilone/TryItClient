import React, { Component } from 'react';
import ValidationError from '../../Validation/validationError';
import RegistrationForm from '../../Components/Registration/RegistrationForm';

export default class RegistrationPage extends Component {
  constructor(props) {
    super();
    this.state = {
      error: '',
      badEntry: false,
    };
  }

  handleRegistrationSuccess = (user) => {
    const { history } = this.props;
    history.push('/login');
  };

  handleRegistrationFail = (info) => {
    const { history } = this.props;
    this.setState({
      badEntry: true,
      error: info.error,
    });
    history.push('/registration');
  };

  render() {
    return (
      <div>
        {this.state.badEntry && <ValidationError render={this.state.error} />}
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
          onRegistrationFail={this.handleRegistrationFail}
        />
      </div>
    );
  }
}
