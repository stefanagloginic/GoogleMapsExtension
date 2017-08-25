import React, { Component } from 'react';
import './App.css'
import SumButton from '../../containers/SumButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <SumButton />
      </div>
    );
  }
}

export default App;
