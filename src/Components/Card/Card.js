import React from 'react';


export default function Card (props){
    return (
        
        <>
            <h3 className='card title'>{props.title}</h3>
                <p className='card tries'>{props.tries} <i class="fas fa-users"></i> Tried It!</p>
        </>
    )
}