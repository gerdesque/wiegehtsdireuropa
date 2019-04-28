import React, { Component } from 'react';
import './BoxAsset.css';

class BoxAsset extends Component {

  onDragStart = (ev, id) => {
    console.log('dragstart:',id);
    ev.dataTransfer.setData("id", id);
  }

  render() {
    return ( <div
      key = {this.props.id}
      {...this.props}
      onDragStart = { (e) => this.onDragStart(e, this.props.id) }
      draggable className = "BoxAsset">{this.props.text}</div>);
    }
  }

  export default BoxAsset;