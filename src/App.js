import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Main from './container/main';
/* 
import Feed from './components/feed';
import Health from './components/health';

 */

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
