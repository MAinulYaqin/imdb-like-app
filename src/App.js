import React, { Component } from 'react';

// import components
import Header from './components/header/header';
import Main from './components/main/main';

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
