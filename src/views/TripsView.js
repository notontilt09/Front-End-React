import React from 'react';
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

import { getTrips, getUser } from '../actions'
import TripsList from '../components/TripsList/TripsList'

class TripsView extends React.Component {
    componentDidMount() {
        const id = localStorage.getItem('userId');
        this.props.getUser(id);
        this.props.getTrips(id);
    }

    render() {
        if (this.props.trips) {
            return (
                <TripsList trips={this.props.trips}/>
            );
        } else {
            return (
                <Loader type="Puff" color="purple" height={80} width={80} />
            )
        }
    }
}

const mapStateToProps = state => ({
    trips: state.trips
})

export default connect(mapStateToProps, { getTrips, getUser })(TripsView);