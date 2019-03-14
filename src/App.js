import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="news">
        <Card />
        <Card />
        </div>
      </div>
    );
  }
}

export default App;
