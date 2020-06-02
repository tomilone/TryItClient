import React from 'react';

export default function ExpandedView(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button onClick={(e) => props.update(e,props.id,props.tries,props.closeModal)}>Try It!</button>
            <p>{props.tries} Tried It!</p>
        </div>
    )
}