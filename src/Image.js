import React, { Component } from 'react';
import './Image.css';
import {LazyImage} from 'lazy-react'

class Image extends Component {

  constructor(props) {
    super(props);
    this.state = {
      src: require('./assets/squares/' + this.props.id + '.webp'),
      color: ["", "yellow-red","green-blue", "purple-green"]
    };
  }

  render() {
    return (
      <div className="Image-container">
        <div className={'duotone ' + this.state.color[this.props.color]}>
        <LazyImage className="Image" offset={100} {...this.props} link={this.state.src} alt={this.props.id}/>
        </div>
        <div className="Boxes-droppable"
          onDragOver={(e)=>this.onDragOver(e)}
          onDrop={(e)=>this.onDrop(e, "image")}>
          droppable
        </div>
      </div>
    )
  }
}

export default Image;
