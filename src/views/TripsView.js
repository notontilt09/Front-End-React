import React from 'react';
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

import { getTrips, getUser, toggleEditUser, handleEditUserChanges, editUser } from '../actions'
import TripsList from '../components/TripsList/TripsList'

class TripsView extends React.Component {
    componentDidMount() {
        const id = localStorage.getItem('userId');
        this.props.getUser(id);
        this.props.getTrips(id);
    }

    toggleEditUser = () => {
        this.props.toggleEditUser();
    }

    handleEditUserSubmit = (e, user) => {
        e.preventDefault();
        this.props.editUser(user);
    }

    render() {
        if (this.props.trips) {
            return (
                <TripsList 
                    toggleEditUser={this.toggleEditUser} 
                    user={this.props.user} 
                    trips={this.props.trips}
                    isEditingUser={this.props.isEditingUser}
                    handleEditUserChanges={this.props.handleEditUserChanges}
                    handleEditUserSubmit={this.handleEditUserSubmit}
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
    isEditingUser: state.isEditingUser
})

export default connect(mapStateToProps, { getTrips, editUser, getUser, toggleEditUser, handleEditUserChanges })(TripsView);