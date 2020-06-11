import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Form from '../../utils/Form';
import Dashboard from '../../routes/Dashboard';
import LandingPage from '../../routes/LandingPage';
import Registration from '../../routes/RegistrationPage';
import Login from '../../routes/LoginPage';
import TryItLogo from '../../logo/TryItLogo.png';
import publicIp from 'public-ip';
import './App.css';

export default class App extends Component {
  render() {
    window.addEventListener(
      'storage',
      function () {
        window.localStorage.clear();
        window.location.replace('/');
      },
      false
    );
    return (
      <div>
        <header className="customLogo_container">
          <img className="logo" src={TryItLogo} alt="Try It!" />
        </header>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}
