import React, { Component } from 'react';
import './Image.css';
import {LazyImage} from 'lazy-react'
import BoxAsset from './BoxAsset';

class Image extends Component {

  constructor(props) {
    super(props);
    this.state = {
      src: require('./assets/squares/' + this.props.id + '.webp'),
      color: ["", "yellow-red","green-blue", "purple-green"],
      assets: JSON.parse(localStorage.getItem(this.props.id)) || []
    };
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDrop = (ev, target) => {
    let droppedAsset = JSON.parse(ev.dataTransfer.getData("asset"));

    const duplicate = this.state.assets.some(asset => asset.id === droppedAsset.id);

    if (this.state.assets.length === 0 || !duplicate) {
      this.setState({ assets: [
        ...this.state.assets,
        droppedAsset
      ]},() => {
        localStorage.setItem(this.props.id, JSON.stringify(this.state.assets));
      });
    }
  }

  render() {
    const assets = this.state.assets.map ((asset) =>
      <BoxAsset key={asset.id} {...asset}/>);

    return (
      <div className="Image-container">
        <div className={'duotone ' + this.state.color[this.props.color]}>
        <LazyImage className="Image" offset={100} {...this.props} link={this.state.src} alt={this.props.id}/>
        </div>
        <div className="Droppable"
          onDragOver={(e)=>this.onDragOver(e)}
          onDrop={(e)=>this.onDrop(e, this)}>
          {assets}
        </div>
      </div>
    )
  }
}

export default Image;
