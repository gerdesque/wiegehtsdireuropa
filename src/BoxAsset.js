import React, { Component } from 'react';
import './BoxAsset.css';
import { DragDropContainer } from 'react-drag-drop-container';

class BoxAsset extends Component {
  constructor(props) {
    super(props);
    this.state = {dragging: false};
  }

  onDragStart = (e) => {
    console.log('onDragStart',e);
    this.setState({dragging: true})
  };

  onDragEnd = (e) => {
    console.log('onDragEnd',e);
    this.setState({dragging: false})
  };

  onMove = (e) => {
    console.log('onMove',e);
    if (this.state.dragging) return;
  }

  render() {
    return (
      <DragDropContainer
        targetKey="image"
        dragData={{props: this.props}}
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        onMouseMove={this.onMove}
        onTouchMove={this.onMove}
        render = {() => {
          return <div {...this.props} className = "BoxAsset">
            {this.props.username && <div className="BoxAsset-user">{this.props.username}</div>}
            {this.props.twitterhandle && <div className="BoxAsset-handle">{this.props.twitterhandle}</div>}
            {this.props.text}
            {this.props.timestamp && <div className="BoxAsset-timestamp">{this.props.timestamp}</div>}
            </div>
        }}/>
    );
  }
}

  export default BoxAsset;