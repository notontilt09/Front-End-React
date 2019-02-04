import React from 'react';
import Login from '../components/Login/Login';
import { connect } from 'react-redux'

import { getTrips } from '../actions'

class TripsView extends React.Component {
    componentDidMount() {
        this.props.getTrips(this.props.guideId)
    }

    render() {
        return (
            <h1>Trips</h1>
        );
    }
}

const mapStateToProps = state => ({
    guideId: state.guideId
})

export default connect(mapStateToProps, { getTrips })(TripsView);