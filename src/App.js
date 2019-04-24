import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import ImageList from './ImageList';
import Boxes from './Boxes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={logo} alt="logo"/>
          <h1>Wie geht's dir, Europa?</h1>     
        </header>
          <div className="App-hero"/>
          <ImageList/>
          <Boxes/>
      </div>
    );
  }
}

export default App;
