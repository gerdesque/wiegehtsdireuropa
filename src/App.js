import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import ImageList from './ImageList';
import Boxes from './Boxes';

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
      let response = await fetch('https://raw.githubusercontent.com/gerdesque/wiegehtsdireuropa/master/europe.json');
      let responseJson = await response.json();
      this.setState({ ...responseJson });
     } catch(error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={logo} alt="logo"/>
          <h1>Wie geht's dir, Europa?</h1>     
        </header>
          <div className="App-hero"/>
          <ImageList images={this.state.images}/>
          <Boxes assets={this.state.tweets}/>
          <Boxes assets={this.state.hashtags}/>
      </div>
    );
  }
}

export default App;
