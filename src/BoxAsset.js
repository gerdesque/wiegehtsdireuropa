import React, { Component } from 'react';
import './BoxAsset.css';

class BoxAsset extends Component {

  onPanStart = (ev, props) => {
    ev.dataTransfer.setData("asset", props);
  }

  render() {
    const props = JSON.stringify(this.props);
    return ( <div
      {...this.props}
      onTouchStart = { (e) => this.onPanStart(e, props) }
      onDragStart = { (e) => this.onPanStart(e, props) }
      draggable className = "BoxAsset">{this.props.text}</div>);
    }
  }

  export default BoxAsset;