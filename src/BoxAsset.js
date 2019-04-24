import React, { Component } from 'react';
import './BoxAsset.css';

class BoxAsset extends Component {

  render() {
    return (<h2 className="BoxAsset" {...this.props}>{this.props.text}</h2>);
  }
}

export default BoxAsset;
