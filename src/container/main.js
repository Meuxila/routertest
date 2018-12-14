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

import { t } from 'ttag';

class Main extends Component {
    state = {
        username: '',
        password1: '',
        password2: '',
        validated: '',
        error: ''
    }

    validateEmail = () => {
        let email = document.getElementById('username')
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(email.value)) {
            alert('Please enter a valid email address');
            return false;
        }
        else {
            alert ('You got it!');
            this.registerHandler();
            // this.setState({ username: event.target.email });
            return true;
        }


    }
    registerHandler = () => {
        if (this.state.password1.length >= 5 && this.state.password1 === this.state.password2) {
            //this.props.history.push('/')
            this.registered = 'true'
            alert('You have just been registered')
        }
        else if (this.state.password1.length < 5) {
            //this.setState({ error: 'ERROR-1' })
            alert('Password should be 6 or longer')
        } else {
            //this.setState({ error: 'ERROR-2' })
            alert('Passwords don\'t match')
        }
    }
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
                                    required
                                    // input type="email"
                                    // onDoubleClick={(email) => this.validateEmail(email)}   
                                    onChange={(event) => this.setState({ username: event.target.value })
                                }

                                />
                                <TextField className="passwordField" id="passwordInput"
                                    label={t`Password`}
                                    type="password"
                                    placeholder={t`Enter a password`}
                                    autoComplete="current-password"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={(event) => this.setState({ password1: event.target.value })
                                    }
                                   
                                />
                                <TextField className="repPasswordField" id="repPasswordInput"
                                    label={t`Repeat Password`}
                                    type="password"
                                    placeholder={t`Repeat the password`}
                                    autoComplete="current-password"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={(event) => this.setState({ password2: event.target.value })
                                    }
                                />
                                <Button className="registerButton"
                                    type="submit"
                                    fullWidth variant="contained"
                                    color="primary"
                                    size="medium"
                                 onClick={() => this.validateEmail()}
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
