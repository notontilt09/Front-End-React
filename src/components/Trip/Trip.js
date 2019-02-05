import React from 'react'

import './trip.css'



const Trip = props => {
    return (
       <div className='trip'>
         <h3>{props.trip.title}</h3>
         <h4>{props.trip.description}</h4>
         <div className="trip-image">
            <img src={props.trip.img_url} alt={props.trip.title} />
         </div>
       </div>
    );
}

export default Trip