import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from '../../utils/Form';

import LandingPage from '../../routes/LandingPage'

export default class App extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                </Switch>
            </div>
        )
    }
}