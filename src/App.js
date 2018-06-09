import React, { Component } from 'react';
import {API_KEY} from './config/api_key';
import config from './config/config';

// import components
import Header from './components/header/header';
import Main from './components/main/main'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
