import React, { Component } from 'react';
import './ImageList.css';
import Image from './Image';

class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      images: []
    };
  }

  async componentDidMount() {
    try {
      let response = await fetch('https://raw.githubusercontent.com/gerdesque/wiegehtsdireuropa/master/europe.json');
      let responseJson = await response.json();
      this.setState({ images: responseJson.images });
     } catch(error) {
      console.error(error);
    }
  }

  render() {
    const imageItems = this.state.images.map((image) =>
      <Image key={image.id} {...image}/>);
      return (<div className="ImageList"><hr className="ImageList-line"/>{imageItems}</div>);
  }
}

export default ImageList;
