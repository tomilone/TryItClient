import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import LandingPage from './routes/LandingPage/LandingPage';
import App from './Components/App/App';
import Dashboard from './routes/Dashboard/Dashboard';
import LoginPage from './routes/Login/LoginPage';
import RegistrationPage from './routes/Registration/RegistrationPage';
import Card from './Components/Card/Card';
import LoginForm from './Components/Login/LoginForm';
import RegistrationForm from './Components/Registration/RegistrationForm';

describe('General Tests', () => {
  it('LandingPage renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <LandingPage />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Renders App without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <App />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Renders Dashboard without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Dashboard />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Renders LoginPage without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <LoginPage />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Renders RegistrationPage without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <RegistrationPage />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Renders Card without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Card />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Renders LoginForm without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <LoginForm />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Renders RegistrationForm without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <RegistrationForm />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
