import React, { Component } from 'react';
import './ImageList.css';
import Image from './Image';

class ImageList extends Component {
  render() {
    const imageItems = this.props.images.map((image) =>
      <Image key={image.id} {...image}/>);
      return (<div className="ImageList">{imageItems}</div>);
  }
}

export default ImageList;
