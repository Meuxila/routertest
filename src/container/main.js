import React, { Component } from 'react';

import { NavLink, Switch, Route } from 'react-router-dom';
import './main.css';


import Feed from '../components/feed';
import Health from '../components/health';
 


class Main extends Component {
    render() {
        return (

            <div className="App">
                <nav>
                    <p> I need to test my router knowledge. </p>
                    <ul>
                        <li><NavLink to="/feed" exact>
                            Feed my pets
                    </NavLink></li>

                        <li><NavLink to="/health" exact>
                            Take care of their health
                    </NavLink></li>
                    </ul>

                </nav>
                <Switch>
                    <Route path="/feed" exact component={Feed} />
                    <Route path="/health" exact component={Health} />

                </Switch>
            </div>
        );
    }
}



export default Main;
