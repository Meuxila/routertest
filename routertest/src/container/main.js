import React, { Component } from 'react';

import { NavLink, Switch, Route } from 'react-router-dom';
import './main.css';

import Feed from '../components/feed';
import Health from '../components/health';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { CardContent, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


class Main extends Component {
    render() {
        return (
<div>
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
            <div className="registerWindow">
            <Card>
                <CardContent>
                    <Typography>
                        {t`Register`}
                    </Typography>

                    <Grid container direction='column' justify='center' margin='40px' alignContent='center'>
                        <TextField className="userNameField" id="username"
                            label={t`Username`}
                            placeholder={t`Enter a Username`}
                            margin="normal"
                            variant="outlined"
                           /*  onChange={(event) => this.setState({ username: event.target.value })
                            } */
                        />
                        <TextField className="passwordField" id="passwordInput"
                            label={t`Password`}
                            type="password"
                            placeholder={t`Enter a password`}
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                            /* onChange={(event) => this.setState({ password1: event.target.value })
                            } */
                        />
                        <TextField className="repPasswordField" id="repPasswordInput"
                            label={t`Repeat Password`}
                            type="password"
                            placeholder={t`Repeat the password`}
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                            /* onChange={(event) => this.setState({ password2: event.target.value })
                            } */
                        />
                        <Button className="registerButton"
                            type="submit"
                            fullWidth variant="contained"
                            color="primary"
                            size="medium"
                           /*  onClick={() => this.registerHandler()} */
                        >
                            {t`Register`}
                        </Button>
                     {/*    {errorHtml} */}
                    </Grid>
                </CardContent>
            </Card>
        </div >
        </div>
        );
    }
}



export default Main;
