import React, { Component } from 'react';
import logo from './logo.svg';
import hero from './assets/hero.jpg';
import './App.css';
import ImageList from './ImageList';
import Boxes from './Boxes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Wie geht's dir, Europa?</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-container">
          <img src={hero} className="App-hero" alt="hero" />
          <ImageList/>
          <Boxes/>
        </div>
      </div>
    );
  }
}

export default App;
