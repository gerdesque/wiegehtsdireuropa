import React, { Component } from 'react';
import './BoxAsset.css';

class BoxAsset extends Component {

  render() {
    return (<p className="BoxAsset" {...this.props}>{this.props.text}</p>);
  }
}

export default BoxAsset;
