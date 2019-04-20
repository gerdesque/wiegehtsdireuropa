import React, { Component } from 'react';
import './Image.css';

class Image extends Component {

  constructor(props) {
    super(props);
    this.state = {
      src: require('./assets/' + this.props.id + '.jpg')
    };
  }

  render() {

    return (
      <img className="Image" {...this.props} src={this.state.src} alt={this.props.id}/>
    )
  }
}

export default Image;
