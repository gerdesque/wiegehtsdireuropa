import React, { Component } from 'react';
import './ImageList.css';
import Image from './Image';
import Facebook from 'react-sharingbuttons/dist/buttons/Facebook'
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter'

let currentValue = 0;

class ImageList extends Component {

  getRandomColor(max) {
    let value = Math.floor(Math.random() * Math.floor(max))
    currentValue = (value !== currentValue) ? value : value+1;
    return currentValue;
  }

  getRandomValue(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  share = () => {
    this.props.share();
  };

  render() {
    const url = 'https://leo-bw.de/wiegehtsdireuropa'
    const shareText = 'Foto @WillyPrager #wiegehtsdireuropa #cdvsued #codingdavinci'
    const imageItems = this.props.images.map((image) =>
      <Image key={image.id} color={this.getRandomColor(8)} {...image}
        hashtags={this.props.hashtags.filter((tag) => tag.sentiments.some((sentiment) => sentiment === image.sentiments[this.getRandomValue(2)]))}
        tweets={this.props.tweets.filter((tag) => tag.sentiments.some((sentiment) => sentiment === image.sentiments[this.getRandomValue(2)]))}
      />);
    return (
      <>
        <div className="ImageList">{imageItems}</div>
        <div className="ImageList-share">
          <a className="react-sharing-button__link react-sharing-button--download" onClick={this.share}>
            <svg className="react-sharing-button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z"/><path d="M10 15l5-6h-4V1H9v8H5l5 6z"/></svg>
            <span className="react-sharing-button__text">Download</span>
          </a>
          <Twitter url={url} shareText={shareText} />
          <Facebook url={url} />
        </div>
      </>
    );
  }
}

export default ImageList;
