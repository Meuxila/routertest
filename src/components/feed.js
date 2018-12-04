import React, { Component } from 'react';

import './feed.css'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class Feed extends Component {
  render() {
    return (
      <div className="feed">
        <Card className = "feedCard">
          <CardContent className= "feedCContent">
            <p>
              Feeding my pets
        </p>

            <button>
              Dry food
          </button>
            <button>
              Wet food
          </button>
            <button>
              Water
          </button>
          </CardContent>
        </Card>




      </div>
    );
  }
}

export default Feed;