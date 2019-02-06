import React from 'react'

import './trip.css'

class Trip extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         trip: {}
      }
   }

   componentWillReceiveProps = newProps => {
      if (newProps.trip !== this.state.trip) {
         this.setState({
            trip: newProps.trip
         })
      }
   }

   handleChanges = e => {
      this.setState({
         trip: {
            ...this.state.trip,
            [e.target.name] : e.target.value
         }
      })
   }

   render() {
      if (!this.props.isEditingTrip) {
         return (
            <div className='trip'>
               <h3>{this.props.trip.title}</h3>
               <h4>{this.props.trip.description}</h4>
               <div className="trip-image">
                  <img src={this.props.trip.img_url} alt={this.props.trip.title} />
               </div>
               <div className='edit-trip-btns'>
                  <button onClick={(e) => this.props.deleteTrip(e, this.props.trip)}>Delete Trip</button>
                  <button onClick={this.props.toggleEditTrip}>Edit Trip</button>
                  <button onClick={this.props.routeToTrips}>Back To Trips</button>
               </div>
            </div>
         );
      } else {
         return (
            <form 
               className='edit-trip-form' 
               onSubmit={(e) => this.props.handleEditTripSubmit(e, this.state.trip)}
            >
               <label htmlFor='title'>Title</label>
               <input 
                  required
                  type='text' 
                  name='title' 
                  onChange={this.handleChanges} 
                  value={this.state.trip.title} 
               />
               <label htmlFor='description'>Description</label>
               <input 
                  required
                  type='text' 
                  name='description' 
                  onChange={this.handleChanges} 
                  value={this.state.trip.description} 
               />
               <label htmlFor='img_url'>Image URL</label>
               <input 
                  required
                  type='text' 
                  name='img_url' 
                  onChange={this.handleChanges} 
                  value={this.state.trip.img_url} 
               />
               <div className='edit-trip-btn-container'>
                  <button type='submit'>Save Changes</button>
                  <button onClick={this.props.toggleEditTrip}>Cancel</button>
               </div>
            </form>

         )
      }
   }
    
}

export default Trip