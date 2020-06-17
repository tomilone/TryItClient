import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landingContainer">
      <p className="mission">
        Have you struggled during this quarantine to find something to do? Well
        TryIt! aims to solve that problem. TryIt! is a user forum application
        that allows users to make posts on what they have done, and allows users
        to interact with those posts by trying them. Whether you want to learn a
        new recipe, you want to find something the whole family can participate
        in, or even if you just want to see how creative people are getting for
        inspiration, sign up & sign in to view the dashboard to get started
        today!
      </p>
      <div className="buttonContainer">
        <div className="customButton">
          <Link to="/registration">Register</Link>
        </div>
        <div className="customButton">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
