import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Form from '../../utils/Form';
import Dashboard from '../../routes/Dashboard';
import LandingPage from '../../routes/LandingPage';
import Registration from '../../routes/RegistrationPage';
import TryItLogo from '../../logo/TryItLogo.png';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <header className="customLogo_container">
          <img className="logo" src={TryItLogo} alt="Try It!" />
        </header>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </div>
    );
  }
}
