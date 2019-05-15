import React, { Component } from 'react';
import './BoxAsset.css';
import { DragDropContainer } from 'react-drag-drop-container';
//import DragDropContainer from './DragDropContainer';

class BoxAsset extends Component {
  constructor(props) {
    super(props);
    this.state = {dragging: false};
  }

  handleClick = (e) => {
    e.stopPropagation();
  }

  render() {
    return (
      <div className = "BoxAsset-Container"
      onClick={this.handleClick}>
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
      </div>
    );
  }
}

  export default BoxAsset;