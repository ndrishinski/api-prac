import React, { Component } from 'react';
import Title from './components/title';
import Family from './components/family';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Title name="Nick"/>
        <Family />
      </div>
    );
  }
}

export default App;
