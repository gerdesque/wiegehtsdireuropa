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
    document.getElementsByClassName('Boxes-container')[0].classList.add('open');
  }

  render() {
    const hashtags = this.state.hashtags.map ((asset) =>
      <BoxAsset key ={asset.id} {...asset}/>);

    const tweets = this.state.tweets.map ((asset) =>
      <BoxAsset key ={asset.id} {...asset}/>);

    return (
      <div className="Boxes" onClick={this.toggleBox}>
        <div className="Boxes-container">
          <div className="Boxes-inner Boxes-tweets">{tweets}</div>
          <div className="Boxes-inner Boxes-hashtags">{hashtags}</div>
        </div>
      </div>
    );
  }
}

export default Boxes;
