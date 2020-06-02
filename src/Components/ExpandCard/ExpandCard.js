import React, { Component } from 'react';
import Popup from 'reactjs-popup';

export default class ExpandCard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: false,
     };
  }
  openModal = () => {
    this.setState({ open: true });
  }
  closeModal = () => {
    this.setState({ open: false });
  }



    render(){
        
    return(
      <>
      <span className='card expand' onClick={this.openModal}>
        <i class="fas fa-expand"></i>
      </span>
      <Popup
      open={this.state.open}
      closeOnDocumentClick
      onClose={this.closeModal}
    >
      <>
        {React.cloneElement(this.props.children, { closeModal: this.closeModal })}
      </>
    </Popup>
    </>

    )
  }
}