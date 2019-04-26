import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import ImageList from './ImageList';
import Boxes from './Boxes';

const small = require('./assets/hero_360.webp');
const medium = require('./assets/hero_853.webp');
const large = require('./assets/hero_1246.webp');
const mega = require('./assets/hero_1901.webp');
const giga = require('./assets/hero_1920.webp');

const ResponsiveImage = () => (
  <img sizes="(max-width: 1920px) 100vw, 1920px" src={giga} alt="header"
    srcSet={`${small} 360w, ${medium} 853w, ${large} 1246w, ${mega} 1901w, ${giga} 1920w`}/>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hashtags: [],
      images: [],
      tweets: []

    };
  }

  async componentDidMount() {
    try {
      let response = await fetch('https://raw.githubusercontent.com/gerdesque/wiegehtsdireuropa/master/src/assets/europe.json');
      let responseJson = await response.json();
      this.setState({ ...responseJson });
     } catch(error) {
      console.error(error);
    }
  }

  render() {
    return (
      <>
        <header>
          <div className="App-logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className="App-text">
            <h1>Wie geht's dir, Europa?</h1>
          </div>
        </header>
        <main>
          <ImageList images={this.state.images}/>
          <Boxes assets={this.state.tweets}/>
          <Boxes assets={this.state.hashtags}/>
        </main>
      </>
    );
  }
}

export default App;
