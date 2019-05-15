import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import ImageList from './ImageList';
import Boxes from './Boxes';
import domtoimage from 'dom-to-image';

function filter (node) {
  return (node.tagName !== 'BUTTON' && node.tagName !== "SOURCE");
}

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

  share = (id) => {
    const selectedImage = document.getElementById(`container-${id}`);
    domtoimage.toPng(selectedImage,
      { filter: filter, quality: 0.95, bgcolor: "#FFFFFF", style: {'transform': 'scale(0.95)' , margin: 0}})
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'wiegehtsdireuropa.png';
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
          <ImageList images={this.state.images} share={this.share} hashtags={this.state.hashtags} tweets={this.state.tweets}/>
          <Boxes hashtags={this.state.hashtags} tweets={this.state.tweets}/>
        </main>
      </>
    );
  }
}

export default App;
