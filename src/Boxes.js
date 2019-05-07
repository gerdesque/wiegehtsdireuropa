import React, { Component } from 'react';
import './Boxes.css';
import BoxAsset from './BoxAsset';

class Boxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hashtags: props.hashtags,
      tweets: props.tweets
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ hashtags: props.hashtags, tweets: props.tweets })
  }

  toggleBox = () => {
    const container = document.getElementsByClassName('Boxes-container')[0];
    container.classList.add('open');
    const label = document.getElementsByClassName('Boxes-label')[0];
    label.classList.add('close');
  }

  render() {
    const hashtags = this.state.hashtags.map ((asset) =>
      <BoxAsset key ={asset.id} {...asset}/>);

    const tweets = this.state.tweets.map ((asset) =>
      <BoxAsset key ={asset.id} {...asset}/>);

    return (
      <div className="Boxes" onClick={this.toggleBox}>
        <div className="Boxes-label">
          <p>Hashtags & Tweets</p>
        </div>
        <div className="Boxes-container">
          <div className="Boxes-inner Boxes-tweets">{tweets}</div>
          <div className="Boxes-inner Boxes-hashtags">{hashtags}</div>
        </div>
      </div>
    );
  }
}

export default Boxes;
