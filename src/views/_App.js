import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import propTypes from 'prop-types';
import 'element-theme-default';
import '../styles/main.scss';
import '../assets/_assets.js';

import { Home } from './Home';

export class App extends Component {
    
    render() {
        return(
            <Router>
                <div className="container">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route render={function() {
                        return <div> 404 - Not Found </div>
                        }}/>
                    </Switch>
                </div>
            </Router>
        )
    }

}
