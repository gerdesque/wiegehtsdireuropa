import React, { Component } from 'react';
import './Image.css';
import { InView } from 'react-intersection-observer'
import ImageAsset from './ImageAsset';
import { DropTarget } from 'react-drag-drop-container';

class Image extends Component {

  constructor(props) {
    super(props);
    this.state = {
      src: require('./assets/squares/' + this.props.id + '.webp'),
      srcJpg: require('./assets/squares/fallback/' + this.props.id + '.jpg'),
      color: ["", "yellow-red","green-blue", "purple-green", "pink-blue", "red-blue", "orange-green", "orange-black"],
      assets: [],
      zoomed: false,
      selected: false
    };
  }

  componentDidMount() {
    if (this.state.assets.length !== 0) return;

    const preselectedTweet = this.getRandomAsset(this.props.tweets);
    const preselectedHashtag = this.getRandomAsset(this.props.hashtags);
    this.setState({ assets: [
      ...this.state.assets,
      preselectedTweet,
      preselectedHashtag
    ]});
  }

  getRandomAsset(assets) {
    const maxLength = assets.length-1;
    const randomValue = Math.floor(Math.random() * Math.floor(maxLength))
    return assets[randomValue];
  }

  handleDrop = (e) => {
    const droppedAsset = e.dragData.props;
    const isTweet = droppedAsset.username !== undefined;

    const duplicate = this.state.assets.some(asset => asset.id === droppedAsset.id);
    const maxAssets = (isTweet && this.state.assets.some(asset => asset.username !== undefined))
      || this.state.assets.length === 4;
    if (!maxAssets && !duplicate) {
      this.setState({ assets: [
        ...this.state.assets,
        droppedAsset
      ]});
    }
  };

  swap = (fromIndex, toIndex, dragData) => {
    let assets = this.state.assets.slice();
    const asset = dragData.props;
    assets.splice(toIndex, 0, asset);
    this.setState({assets: assets});
  };

  kill = (id) => {
    let assets = this.state.assets.slice();
    const index = assets.findIndex((asset) => {
      return asset.id === id
    });
    if (index !== -1) {
      assets.splice(index, 1);
    }
    this.setState({assets: assets});
  };

  zoom = () => {
    const isZoomed = this.state.zoomed;
    this.setState({ zoomed: !isZoomed });
  }

  select = () => {
    const isSelected = this.state.selected;
    this.setState({ selected: !isSelected });
  }

  render() {
    const isZoomed = this.state.zoomed ? ' zoomed': '';
    return (
      <InView triggerOnce="true">
        {({ inView, ref }) => (
          <div id={'container-'+this.props.id} className={'Image-container' + isZoomed} ref={ref}>
          {inView && 
            <>
              <div className={'duotone ' + this.state.color[this.props.color]} onClick={this.select}>
              <picture>
                <source srcSet={this.state.src} type="image/webp"/>
                <source srcSet={this.state.srcJpg} type="image/jpeg"/>
                <img className="Image fade" id={this.props.id} src={this.state.srcJpg} alt={this.props.id} onClick={this.zoom}/>
              </picture>
              </div>
              <DropTarget
                onHit={this.handleDrop}
                targetKey="image"
                dropData={{name: this.props.name}}>
                <DropTarget
                  onHit={this.handleDrop}
                  targetKey="imageItem"
                  dropData={{name: this.props.name}}>
                  <div className="Image-droppable">
                    {this.state.assets.map((asset, index) => {
                      return (
                        <ImageAsset key={asset.id} {...asset} kill={this.kill} index={index} swap={this.swap}/>);
                        })}
                  </div>
                </DropTarget>
              </DropTarget>
              <button className="react-sharing-button__link react-sharing-button--download" onClick={ () => this.props.share(this.props.id)}>
                <svg className="react-sharing-button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z"/><path d="M10 15l5-6h-4V1H9v8H5l5 6z"/></svg>
              </button>
            </>
          }
          </div>
         )}
      </InView>
    )
  }
}

export default Image;
