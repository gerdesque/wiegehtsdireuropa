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
      <div className="Image-container" title={this.props.sentiments} >
        <img className="Image" {...this.props} src={this.state.src} alt={this.props.id}/>
      </div>
    )
  }
}

export default Image;
