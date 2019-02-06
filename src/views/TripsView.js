import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';

import { 
    getTrips, 
    getUser, 
    toggleEditUser, 
    handleEditUserChanges, 
    editUser,
    toggleAddingTrip,
    handleAddTripChanges,
    addTrip   
} from '../actions'
import TripsList from '../components/TripsList/TripsList'

class TripsView extends React.Component {
    componentDidMount() {
        const id = localStorage.getItem('userId');
        if (id) {
            this.props.getUser(id);
            this.props.getTrips(id);
        }
    }

    toggleEditUser = () => {
        this.props.toggleEditUser();
    }

    handleEditUserSubmit = (e, user) => {
        e.preventDefault();
        this.props.editUser(user);
    }

    handleAddTrip = (e, trip) => {
        e.preventDefault();
        console.log(trip);
        this.props.addTrip(trip);
    }

    routeToTrip = () => {

    }

    render() {
        if (!localStorage.getItem('token')) {
            return (
                <>
                <h1>Please Log In.</h1>
                <Link to='/login'><button>Login</button></Link>
                </>
            )
        }
        if (this.props.trips) {
            return (
                <TripsList 
                    toggleEditUser={this.toggleEditUser} 
                    user={this.props.user} 
                    trips={this.props.trips}
                    isEditingUser={this.props.isEditingUser}
                    handleEditUserChanges={this.props.handleEditUserChanges}
                    handleEditUserSubmit={this.handleEditUserSubmit}
                    toggleAddingTrip={this.props.toggleAddingTrip}
                    isAddingTrip={this.props.isAddingTrip}
                    handleAddTripChanges={this.props.handleAddTripChanges}
                    newTrip={this.props.newTrip}
                    handleAddTrip={this.handleAddTrip}
                />
            );
        } else {
            return (
                <Loader type="Puff" color="purple" height={80} width={80} />
            )
        }
    }
}

const mapStateToProps = state => ({
    trips: state.trips,
    user: state.loggedInUser,
    isEditingUser: state.isEditingUser,
    isAddingTrip: state.isAddingTrip,
    newTrip: state.newTrip
})

export default connect(mapStateToProps, { getTrips, addTrip, handleAddTripChanges, toggleAddingTrip, editUser, getUser, toggleEditUser, handleEditUserChanges })(TripsView);