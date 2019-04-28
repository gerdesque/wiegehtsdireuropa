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
    this.setState({ assets: JSON.parse(localStorage.getItem('assets')) || props.assets.filter(asset => asset.target = "none") })
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDrop = (ev, target) => {
    let id = ev.dataTransfer.getData("id");

    let assets = this.state.assets.filter((asset) => {
      if (asset.id === id) {
        asset.target = target;
      }
      return asset;
    });

    this.setState({
      ...this.state,
      assets
    },() => {
      localStorage.setItem('assets', JSON.stringify(this.state.assets));
    });
  }

  render() {
    var assets = { none: [], 
                  image: []        
    }
    this.state.assets.forEach ((asset) => {               
      assets[asset.target].push(
      <BoxAsset {...asset}/>);        
    });
    return (
      <>
        <div className="Boxes-droppable"
          onDragOver={(e)=>this.onDragOver(e)}
          onDrop={(e)=>this.onDrop(e, "image")}>
          {assets.image}
        </div>
        <div className="Boxes"
          onDragOver={(e)=>this.onDragOver(e)}
          onDrop={(e)=>{this.onDrop(e, "none")}}>
          {assets.none}
        </div>
      </>);
  }
}

export default Boxes;
