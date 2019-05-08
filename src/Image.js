import React, { Component } from 'react';
import './Image.css';
import {LazyImage} from 'lazy-react'
import ImageAsset from './ImageAsset';
import { DropTarget } from 'react-drag-drop-container';

class Image extends Component {

  constructor(props) {
    super(props);
    this.state = {
      src: require('./assets/squares/' + this.props.id + '.webp'),
      color: ["", "yellow-red","green-blue", "purple-green"],
      assets: JSON.parse(localStorage.getItem(this.props.id)) || []
    };
  }

  handleDrop = (e) => {
    const droppedAsset = e.dragData.props;
    const isTweet = droppedAsset.username !== undefined;

    const duplicate = this.state.assets.some(asset => asset.id === droppedAsset.id);
    const maxAssets = (isTweet && this.state.assets.some(asset => asset.username !== null))
      || this.state.assets.length === 4;
    if (!maxAssets && !duplicate) {
      this.setState({ assets: [
        ...this.state.assets,
        droppedAsset
      ]},() => {
        localStorage.setItem(this.props.id, JSON.stringify(this.state.assets));
      });
    }
  };

  swap = (fromIndex, toIndex, dragData) => {
    let assets = this.state.assets.slice();
    const asset = dragData.props;
    assets.splice(toIndex, 0, asset);
    this.setState({assets: assets},() => {
      localStorage.setItem(this.props.id, JSON.stringify(this.state.assets));
    });
  };

  kill = (id) => {
    let assets = this.state.assets.slice();
    const index = assets.findIndex((asset) => {
      return asset.id === id
    });
    if (index !== -1) {
      assets.splice(index, 1);
    }
    this.setState({assets: assets},() => {
      localStorage.setItem(this.props.id, JSON.stringify(this.state.assets));
    });
  };

  render() {
    return (
      <div id={'container-'+this.props.id} className="Image-container">
        <div className={'duotone ' + this.state.color[this.props.color]}>
          <LazyImage className="Image" offset={100} {...this.props} link={this.state.src} alt={this.props.id}/>
        </div>
        <DropTarget
          onHit={this.handleDrop}
          targetKey="image"
          dropData={{name: this.props.name}}>
          <DropTarget
            onHit={this.handleDrop}
            targetKey="imageItem"
            dropData={{name: this.props.name}}>
            <div className="Droppable">
              {this.state.assets.map((asset, index) => {
                return (
                  <ImageAsset key={asset.id} {...asset} kill={this.kill} index={index} swap={this.swap}/>);
                  })}
            </div>
          </DropTarget>
        </DropTarget>
      </div>
    )
  }
}

export default Image;
