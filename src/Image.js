import React, { Component } from 'react';
import './Image.css';
import {LazyImage} from 'lazy-react'

class Image extends Component {

  constructor(props) {
    super(props);
    this.state = {
      src: require('./assets/squares/' + this.props.id + '.jpg'),
      color: ["", "yellow-red","green-blue", "purple-green"]
    };
  }

  getRandomColor(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render() {

    return (
      <div className="Image-container" title={this.props.sentiments}>
        <div className={'duotone ' + this.state.color[this.getRandomColor(4)]}>
        <LazyImage className="Image" offset="0" {...this.props} link={this.state.src} alt={this.props.id}/>
        </div>
      </div>
    )
  }
}

export default Image;
