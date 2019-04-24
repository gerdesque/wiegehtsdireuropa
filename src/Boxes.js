import React, { Component } from 'react';
import './Boxes.css';
import BoxAsset from './BoxAsset';

class Boxes extends Component {

  render() {
    const boxItems = this.props.assets.map((asset) =>
      <BoxAsset key={asset.id} {...asset}/>);
      return (<div className="Boxes">{boxItems}</div>);
  }
}

export default Boxes;
