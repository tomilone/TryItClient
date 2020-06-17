import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './Expand.css';

export default class ExpandCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <>
        <span className="card expand" onClick={this.openModal}>
          <i class="fas fa-expand"></i>
        </span>
        <Popup
          contentStyle={{ width: '75%', height: '50%', background: '#d8ede2' }}
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <>
            {React.cloneElement(this.props.children, {
              closeModal: this.closeModal,
            })}
          </>
        </Popup>
      </>
    );
  }
}
