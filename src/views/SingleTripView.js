import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getTrips, getUser, toggleEditUser, handleEditUserChanges, editUser } from '../actions'
import Trip from '../components/Trip/Trip'
import Profile from '../components/Profile/Profile'

class SingleTripView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            trips: [],
            trip: {}
        }
    }
   

    componentDidMount() {
        this.onLoad();
        this.setState({
            trips: this.props.trips
        })
    }

    componentWillReceiveProps = newProps => {
        if (newProps.trips !== this.state.trips) {
            this.setState({
                trips: newProps.trips
            }, () => this.findTrip())
        }
    }

    onLoad = () => {
        const id = localStorage.getItem('userId');
        if (id) {
            this.props.getUser(id);
            this.props.getTrips(id);
        } 
    }

    findTrip = () => {
        const trip = this.state.trips.find(trip => this.props.match.params.id === `${trip.id}`)
        this.setState({trip})
    }

    handleEditUserSubmit = (e, user) => {
        e.preventDefault();
        this.props.editUser(user);
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
        return (
            <>
                <Profile 
                    user={this.props.user} 
                    isEditingUser={this.props.isEditingUser}
                    toggleEditUser={this.props.toggleEditUser}
                    handleEditUserChanges={this.props.handleEditUserChanges}
                    handleEditUserSubmit={this.handleEditUserSubmit}
                />
                <Trip trip={this.state.trip} />
            </>
        )
    }
}

const mapStateToProps = state => ({
    trips: state.trips,
    user: state.loggedInUser,
    isEditingUser: state.isEditingUser,
})

export default connect(mapStateToProps, { getUser, getTrips, toggleEditUser, handleEditUserChanges, editUser })(SingleTripView)