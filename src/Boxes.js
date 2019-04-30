import React, { Component } from 'react';
import './Boxes.css';
import BoxAsset from './BoxAsset';

class Boxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: props.assets
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ assets: props.assets })
  }

  render() {
    const assets = this.state.assets.map ((asset) =>
      <BoxAsset key ={asset.id} {...asset}/>);

    return (
    <div className="Boxes">{assets}</div>
    );
  }
}

export default Boxes;
