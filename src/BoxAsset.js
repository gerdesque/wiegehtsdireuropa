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
    return;
  };

  onDrag = (e) => {
    console.log('onDrag',e);
    this.setState({dragging: true})
  }

  onDragEnd = (e) => {
    console.log('onDragEnd',e);
    this.setState({dragging: false})
  };

  render() {
    return (
      <DragDropContainer
        targetKey="image"
        dragData={{props: this.props}}
        onDragStart={this.onDragStart}
        onDrag={this.onDrag}
        onDragEnd={this.onDragEnd}
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