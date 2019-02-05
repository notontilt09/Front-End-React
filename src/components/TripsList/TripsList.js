import React from 'react'

import Trip from '../Trip/Trip'

import './tripsList.css'

const TripsList = props => {
    return (
        <>
            <div className='profile'>
                <h2 className='trips-title'>{props.user.name}</h2>
                <h3>{props.user.title}</h3>
                <h4>Age: {props.user.age}</h4>
                <h4>Career Length: {props.user.careerLength}</h4>
                <p>{props.user.tagline}</p>
            </div>
            <div className='trips-list'>
                {props.trips.map(trip => 
                    <Trip key={trip.id} trip={trip} />
                )}
             </div>
        </>
    );
}

export default TripsList