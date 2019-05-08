import React, { Component } from 'react';
import './ImageList.css';
import Image from './Image';

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
    const imageItems = this.props.images.slice(0,7).map((image) =>
      <Image key={image.id} color={this.getRandomColor(4)} {...image}/>);
      return (
        <>
          <div className="ImageList">{imageItems}</div>
          {/* <div className="ImageList-share"><button id="share" onClick={this.share}>Share</button></div> */}
        </>
      );
  }
}

export default ImageList;
