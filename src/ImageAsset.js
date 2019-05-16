import React, { Component } from 'react';
import './ImageAsset.css';
import { DropTarget } from 'react-drag-drop-container';
import DragDropContainer from './DragDropContainer';

const maxAssetLength = 140;

class ImageAsset extends Component {

  handleDrop = (e) => {
    e.stopPropagation();
    this.props.swap(e.dragData.index, this.props.index, e.dragData);
    e.containerElem.style.visibility="hidden";
  };

  deleteMe = () => {
    this.props.kill(this.props.id);
  };

  onEdit = (e) => {
    if(e.target.textContent.length >= maxAssetLength && e.keyCode !== 8) {
      e.preventDefault();
    }
  };

  render() {
    return (
        <div className="ImageAsset">
        <DragDropContainer
            targetKey="imageItem"
            dragData={{props: this.props, index: this.props.index}}
            onDrop={this.deleteMe}
            disappearDraggedElement={true}
            dragHandleClassName="ImageAsset-drag">
            <DropTarget
              onHit={this.handleDrop}
              targetKey="imageItem">
              <div className="ImageAsset-drag" onKeyDown={this.onEdit} onPaste={this.onEdit} contentEditable="true" suppressContentEditableWarning>
                {this.props.text}
              </div>
          </DropTarget>
        </DragDropContainer>
      </div>
    );
    }
  }

  export default ImageAsset;