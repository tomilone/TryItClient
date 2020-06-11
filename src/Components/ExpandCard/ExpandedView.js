import React from 'react';
import tryItButton from '../../logo/TryItButton.png';
import TryItAPIService from '../../services/tryit-api-service';

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
      <button onClick={() => checkDelete()}>Delete</button>
    ) : null;
  }

  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button
        onClick={(e) =>
          props.update(e, props.id, props.tries, props.closeModal)
        }
      >
        <img src={tryItButton} alt="Try It Button" />
      </button>
      <p>
        {props.tries} <i className="fas fa-users"></i> Tried It!
      </p>
      {deleteButton()}
    </div>
  );
}
