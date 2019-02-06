import React from 'react'
import { Link } from 'react-router-dom'

import Profile from '../Profile/Profile'
import AddTripForm from './AddTripForm'

import './tripsList.css'

const TripsList = props => {
    return (
        <>
            <Profile 
                user={props.user} 
                isEditingUser={props.isEditingUser}
                toggleEditUser={props.toggleEditUser}
                handleEditUserChanges={props.handleEditUserChanges}
                handleEditUserSubmit={props.handleEditUserSubmit}
            />
            <div className='trips-list'>
                <button className="toggler-btn"
                    onClick={props.toggleAddingTrip}
                >
                {props.isAddingTrip ? 'Cancel' : 'Create Trip'}
                </button>
                {props.isAddingTrip &&
                    <AddTripForm 
                        newTrip={props.newTrip}
                        handleAddTripChanges={props.handleAddTripChanges}
                        handleAddTrip={props.handleAddTrip}    
                    />
                }
                <table>
                    <tbody>
                        <tr>
                            <th>Trip Title</th>
                            <th>Trip Location</th>
                            <th>Trip Thumbnail</th>
                            <th>Trip Details</th>
                        </tr>
                        {props.trips.map(trip => 
                                <tr key={trip.id}>
                                    <td><h5>{trip.title}</h5></td>
                                    <td><h5>{trip.description}</h5></td>
                                    <td><img src={trip.img_url} alt='trip-thumbnail' /></td>
                                    <td><Link to={`/trips/${trip.id}`}><button>View Trip Details</button></Link></td>
                                </tr>
                     )}
                    </tbody>
                </table>
             </div>
        </>
    );
}

export default TripsList