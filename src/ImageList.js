import React, { Component } from 'react';
import './ImageList.css';
import Image from './Image';
import Facebook from 'react-sharingbuttons/dist/buttons/Facebook'
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter'
import 'react-sharingbuttons/dist/main.css'

let currentValue = 0;

class ImageList extends Component {

  getRandomColor(max) {
    let value = Math.floor(Math.random() * Math.floor(max))
    currentValue = (value !== currentValue) ? value : value+1;
    return currentValue;
  }

  share = () => {
    this.props.share();
  };

  render() {
    const url = 'https://leo-bw.de/wiegehtsdireuropa'
    const shareText = 'Foto @WillyPrager #wiegehtsdireuropa #cdvsued #codingdavinci'
    const imageItems = this.props.images.map((image) =>
      <Image key={image.id} color={this.getRandomColor(8)} {...image}/>);
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
