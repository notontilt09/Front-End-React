import React from 'react'

import Trip from '../Trip/Trip'

const TripsList = props => {
    return (
        <div className="trips-list">
            <h2>Your Trips</h2>
            {props.trips.map(trip => 
                <Trip key={trip.id} trip={trip} />
        )}</div>
    );
}

export default TripsList