import React, { Component } from 'react';
import './ImageAsset.css';
import { DragDropContainer,DropTarget } from 'react-drag-drop-container';

class ImageAsset extends Component {

  handleDrop = (e) => {
    e.stopPropagation();
    this.props.swap(e.dragData.index, this.props.index, e.dragData);
    e.containerElem.style.visibility="hidden";
  };

  deleteMe = () => {
    this.props.kill(this.props.id);
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
              <div className="ImageAsset-drag" contentEditable="true" suppressContentEditableWarning>
                {this.props.text}
              </div>
          </DropTarget>
        </DragDropContainer>
      </div>
    );
    }
  }

  export default ImageAsset;