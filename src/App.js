import React, { Component } from 'react';
import Title from './components/title';
import Users from './components/users';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Title name="Nick"/>
        <Users />
      </div>
    );
  }
}

export default App;
