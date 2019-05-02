import React, { Component } from 'react';
import './BoxAsset.css';
import { DragDropContainer } from 'react-drag-drop-container';

class BoxAsset extends Component {

  render() {
    return (
      <DragDropContainer
        targetKey="image"
        dragData={{props: this.props}}
        render = {() => {
          return <div {...this.props} className = "BoxAsset">{this.props.text}</div>
        }}/>
    );
    }
  }

  export default BoxAsset;