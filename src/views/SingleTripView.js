import React from 'react'
import { connect } from 'react-redux'

import { getTrips, getUser } from '../actions'
import Trip from '../components/Trip/Trip'

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
        this.props.getUser(id);
        this.props.getTrips(id);
    }

    findTrip = () => {
        const trip = this.state.trips.find(trip => this.props.match.params.id === `${trip.id}`)
        this.setState({trip})
    }
    
    

    render() {
        return (
            <h1>{this.state.trip.title}</h1>
        )
    }
}

const mapStateToProps = state => ({
    trips: state.trips
})

export default connect(mapStateToProps, { getUser, getTrips })(SingleTripView)