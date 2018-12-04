import React, { Component } from 'react';

import './health.css'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class Health extends Component {
    actionHandler = () =>{
        this.props.history.push('/feed')
    }

  render() {
    return (
      <div className="health">
        <Card  className = "healthCard">
          <CardContent className = "healthCContent">
            <p>
            Taking care of their health
        </p>

            <button>
              Brush off
          </button>
            <button>
              Litter
          </button>
            <button>
              Cuddling
          </button>
          <p>-----------</p>
          <button onClick = {() => this.actionHandler()}>
              Go to Feed
          </button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Health;