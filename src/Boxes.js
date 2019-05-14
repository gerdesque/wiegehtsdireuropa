import React, { Component } from 'react';
import './Boxes.css';
import BoxAsset from './BoxAsset';
import { InView } from 'react-intersection-observer'

const shuffleArray = array => array.sort(() => Math.random() - 0.5);

class Boxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hashtags: props.hashtags,
      tweets: props.tweets,
      open: false
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ hashtags: shuffleArray(props.hashtags), tweets: shuffleArray(props.tweets) })
  }

  toggleBox = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  onTouchStart = (e) => {
    console.log('onTouchStart' , e);
    return;
  };

  render() {
    const hashtags = this.state.hashtags.map ((asset) =>
      <BoxAsset key ={asset.id} {...asset}/>);

    const tweets = this.state.tweets.map ((asset) =>
      <BoxAsset key ={asset.id} {...asset}/>);

    let className = 'Boxes';
    if (this.state.open) {
      className += ' open';
    }

    return (
      <InView triggerOnce="true">
      {({ inView, ref }) => (
        <div className={className} onClick={this.toggleBox} ref={ref}>
          <div className="Boxes-knob"/>
        {inView &&
          <div className="Boxes-container">
            <div className="Boxes-inner Boxes-tweets" onMouseDown={this.onTouchStart}>{tweets}</div>
            <div className="Boxes-inner Boxes-hashtags">{hashtags}</div>
          </div>
        }
        </div>
      )}
      </InView>
    );
  }
}

export default Boxes;
