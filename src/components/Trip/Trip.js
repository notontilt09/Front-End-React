import React from 'react'

import './trip.css'



const Trip = props => {
    return (
       <div className='trip'>
         <h3>{props.trip.title}</h3>
         <h4>{props.trip.description}</h4>
         <img src={props.trip.src} alt={props.trip.title} />
       </div>
    );
}

export default Trip