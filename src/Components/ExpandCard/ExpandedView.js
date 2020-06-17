import React from 'react';
import TryItAPIService from '../../services/tryit-api-service';
import './Expand.css';

export default function ExpandedView(props) {
  function checkDelete() {
    const currentUser = localStorage.getItem('id');
    if (currentUser == props.author) {
      TryItAPIService.deleteCard(props.id);
    } else {
      alert('not yours dingbat');
    }
  }

  function deleteButton() {
    const currentUser = localStorage.getItem('id');
    return currentUser == props.author ? (
      <button className="delete" onClick={() => checkDelete()}>
        Delete
      </button>
    ) : null;
  }

  return (
    <div className="expandedContainer">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button
        className="tryit-button"
        onClick={(e) =>
          props.update(e, props.id, props.tries, props.closeModal)
        }
      >
        TryIt!
      </button>
      <p>
        {props.tries} <i className="fas fa-users"></i> Tried It!
      </p>
      {deleteButton()}
    </div>
  );
}
