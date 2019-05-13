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

  render() {
    const url = 'https://leo-bw.de/wiegehtsdireuropa'
    const shareText = 'Foto @WillyPrager #wiegehtsdireuropa #cdvsued #codingdavinci'
    const imageItems = this.props.images.map((image) =>
      <Image key={image.id} color={this.getRandomColor(8)} {...image} share={this.props.share}
        hashtags={this.props.hashtags
          .filter((tag) => tag.sentiments.some(sentiment => image.sentiments.includes(sentiment)))
          .filter((tag) => tag.categories.some(categorie => image.categories.includes(categorie)))}
        tweets={this.props.tweets
          .filter((tweet) => tweet.sentiments.some(sentiment => image.sentiments.includes(sentiment)))
          .filter((tweet) => tweet.categories.some(categorie => image.categories.includes(categorie)))}
      />);
    return (
      <>
        <div className="ImageList">{imageItems}</div>
        <div className="ImageList-share">
          <Twitter url={url} shareText={shareText} />
          <Facebook url={url} />
        </div>
      </>
    );
  }
}

export default ImageList;
