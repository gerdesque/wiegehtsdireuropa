import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import ImageList from './ImageList';
import Boxes from './Boxes';
import domtoimage from 'dom-to-image';

// const small = require('./assets/hero_360.webp');
// const medium = require('./assets/hero_1050.webp');
// const large = require('./assets/hero_1586.webp');
// const jumpo = require('./assets/hero_1920.webp');

// const ResponsiveImage = () => (
//   <img sizes="(max-width: 1920px) 100vw, 1920px" src={giga} alt="header"
//     srcSet={`${small} 360w, ${medium} 1050w, ${large} 1586w, ${jumpo} 1920w`}/>
// );

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
      //let response = await fetch('http://127.0.0.1:8080/europe.json');
      let response = await fetch('https://raw.githubusercontent.com/gerdesque/wiegehtsdireuropa/master/src/assets/europe.json');
      let responseJson = await response.json();
      this.setState({ ...responseJson });
     } catch(error) {
      console.error(error);
    }
  }

  share() {
    const selectedImage = document.getElementById('container-labw-5-90607');
    domtoimage.toJpeg(selectedImage, { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'wiegehtsdireuropa.jpeg';
        link.href = dataUrl;
        link.click();
    });
  }

  render() {
    return (
      <>
        <header>
          <div className="App-header">
            <h1>Wie geht's dir, Europa?</h1>
            <img src={logo} alt="logo"/>
          </div>
          <div className="App-subtitle">
            <h2>@WillyPragher</h2>
          </div>
        </header>
        <main>
          <ImageList images={this.state.images} share={this.share}/>
          <Boxes hashtags={this.state.hashtags} tweets={this.state.tweets}/>
        </main>
      </>
    );
  }
}

export default App;
