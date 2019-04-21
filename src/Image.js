import React, { Component } from 'react';
import './Image.css';

class Image extends Component {

  constructor(props) {
    super(props);
    this.state = {
      src: require('./assets/' + this.props.id + '.jpg'),
      color: ["", "yellow-red","green-blue", "purple-green"]
    };
  }

  getRandomColor(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render() {

    return (
      <div className="Image-container" title={this.props.sentiments}>
        <div className={this.state.color[this.getRandomColor(4)] + ' duotone'}>
          <img className="Image" {...this.props} src={this.state.src} alt={this.props.id}/>
        </div>
      </div>
    )
  }
}

export default Image;
