import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';

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
                {props.trips.length > 0 &&
                    <table>
                        <tbody>
                            <tr>
                                <th>Trip Title</th>
                                <th>Trip Description</th>
                                <th>Trip Thumbnail</th>
                                <th>Last Updated</th>
                                <th>Trip Details</th>
                            </tr>
                            {props.trips.map(trip => 
                                    <tr key={trip.id}>
                                        <td><h5>{trip.title}</h5></td>
                                        <td><h5>{trip.description}</h5></td>
                                        <td><img src={trip.img_url} alt='trip-thumbnail' /></td>
                                        <td><h5>{moment(trip.updated_at).fromNow()}</h5></td>
                                        <td><Link to={`/trips/${trip.id}`}><button>View Trip Details</button></Link></td>
                                    </tr>
                        )}
                        </tbody>
                    </table>
                }
                {!props.trips.length &&
                    <h2>There are no trips for this user.  Try adding some!</h2>
                }
             </div>
        </>
    );
}

export default TripsList