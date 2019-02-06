import React from 'react'

import './trip.css'

const Trip = props => {
   if (!props.isEditingTrip) {
      return (
         <div className='trip'>
           <h3>{props.trip.title}</h3>
           <h4>{props.trip.description}</h4>
           <div className="trip-image">
              <img src={props.trip.img_url} alt={props.trip.title} />
           </div>
           <button onClick={(e) => props.deleteTrip(e, props.trip)}>Delete Trip</button>
           <button onClick={props.toggleEditTrip}>Edit Trip</button>
         </div>
      );
   } else {
      return (
         <form>

            <button onClick={props.toggleEditTrip}>Cancel</button>
         </form>

      )
   }
    
}

export default Trip