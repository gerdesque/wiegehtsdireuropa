import React, { Component } from 'react';
import './Image.css';
import { InView } from 'react-intersection-observer'
import ImageAsset from './ImageAsset';
import DropTarget from './DropTarget';

const isHashtag = asset => asset.text.charAt(0) === '#';

class Image extends Component {

  constructor(props) {
    super(props);
    this.state = {
      src: require('./assets/squares/' + this.props.id + '.webp'),
      srcJpg: require('./assets/squares/fallback/' + this.props.id + '.jpg'),
      color: ["", "yellow-red","green-blue", "purple-green", "pink-blue", "red-blue", "orange-green", "orange-black", "violet-marine", "green-brown", "yellow-turquoise"],
      assets: [],
      zoomed: false
    };
  }

  componentDidMount() {
    if (this.props.tweets.length !== 0 && this.props.hashtags.length !== 0) {
      const preselectedTweet = this.getRandomAsset(this.props.tweets);
      const preselectedHashtag = this.getRandomAsset(this.props.hashtags);
      this.setState({ assets: [
        ...this.state.assets,
        preselectedTweet,
        preselectedHashtag
      ]});
    }
  }

  getRandomAsset(assets) {
    const maxLength = assets.length-1;
    const randomValue = Math.floor(Math.random() * Math.floor(maxLength))
    return assets[randomValue];
  }

  handleDrop = (e) => {
    let assets = this.state.assets.slice();

    const droppedAsset = e.dragData.props;
    const duplicate = assets.some(asset => asset.id === droppedAsset.id);

    if (duplicate) return;

    // Replace hashtag
    const oldHashtags = assets.filter(asset => isHashtag(asset));
    if (isHashtag(droppedAsset) && oldHashtags.length === 3) {
      return this.replaceAsset(oldHashtags[2].id, assets, droppedAsset)
    }

    // Replace tweet
    const oldTweet = assets.find(asset => !isHashtag(asset));
    if (!isHashtag(droppedAsset) && oldTweet !== undefined) {
      return this.replaceAsset(oldTweet.id, assets, droppedAsset)
    }

    // Add asset
    this.setState({ assets: [...assets, droppedAsset]});
  };

  replaceAsset(id, assets, droppedAsset) {
    const index = assets.findIndex((asset) => {
      return asset.id === id
    });
    if (index !== -1) {
      assets.splice(index, 1, droppedAsset);
    }
    this.setState({ assets: assets});
  }

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

  render() {
    const isZoomed = this.state.zoomed ? ' zoomed': '';
    var externalUrl = 'https://www.landesarchiv-bw.de/plink/?f=' + (this.props.id).substr(5);
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
              <button className="react-sharing-button__link react-sharing-button--download" onClick={ () => this.props.share(this.props.id)} aria-label="Download image">
                <svg className="react-sharing-button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z"/><path d="M10 15l5-6h-4V1H9v8H5l5 6z"/></svg>
              </button>
              <a className="react-sharing-button__link react-sharing-button--external" href={externalUrl} target="_blank" rel="noopener noreferrer" aria-label="External link">
              <svg className="react-sharing-button__icon" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1408 928v320q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h704q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-320q0-14 9-23t23-9h64q14 0 23 9t9 23zm384-864v512q0 26-19 45t-45 19-45-19l-176-176-652 652q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l652-652-176-176q-19-19-19-45t19-45 45-19h512q26 0 45 19t19 45z"/></svg>
              </a>
            </>
          }
          </div>
         )}
      </InView>
    )
  }
}

export default Image;
