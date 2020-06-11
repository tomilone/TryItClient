import React from 'react';
import tryItButton from '../../logo/TryItButton.png';

export default function ExpandedView(props) {
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
    </div>
  );
}
