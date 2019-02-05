import React from 'react'

import Trip from '../Trip/Trip'

import './tripsList.css'

const TripsList = props => {
    return (
        <>
            <h2 className='trips-title'>Your Trips</h2>
            <div className='trips-list'>
                {props.trips.map(trip => 
                    <Trip key={trip.id} trip={trip} />
                )}
             </div>
        </>
    );
}

export default TripsList