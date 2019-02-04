import React from 'react';
import { connect } from 'react-redux'

import { getTrips } from '../actions'
import TripsList from '../components/TripsList/TripsList'

class TripsView extends React.Component {
    componentDidMount() {
        const id = localStorage.getItem('userId')
        this.props.getTrips(id)
    }

    render() {
        if (this.props.trips) {
            return (
                <TripsList trips={this.props.trips}/>
            );
        }
    }
}

const mapStateToProps = state => ({
    trips: state.trips
})

export default connect(mapStateToProps, { getTrips })(TripsView);