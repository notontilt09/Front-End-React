import React from 'react'



const Trip = props => {
    return (
       <div className='trip'>
         <h2>{props.trip.title}</h2>
         <img src={props.trip.src} alt={props.trip.description} />
       </div>
    );
}

export default Trip