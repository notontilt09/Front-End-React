import React from 'react'

const AddTripForm = props => {
    return (
        <form className="add-trip-form" onSubmit={(e) => props.handleAddTrip(e, props.newTrip)}>
            <label htmlFor='title'>Title</label>
                <input 
                    onChange={props.handleAddTripChanges}
                    value={props.newTrip.title}
                    type='text' 
                    name='title' 
                />
            <label htmlFor='description'>Location</label>
                <input 
                    onChange={props.handleAddTripChanges}
                    value={props.newTrip.description}
                    type='text' 
                    name='description' 
                />
            <label htmlFor='designation'>Privacy</label>
                <select 
                    name='designation'
                    onChange={props.handleAddTripChanges}
                    value={props.newTrip.designation}>
                    <option>Public</option>
                    <option>Private</option>
                </select>
            <label htmlFor='type'>Type of Trip</label>
                <input 
                    onChange={props.handleAddTripChanges}
                    value={props.newTrip.type}
                    type='text' 
                    name='type' 
                />
            <label htmlFor='duration'>Trip Length in Days</label>
                <input 
                    onChange={props.handleAddTripChanges}
                    value={props.newTrip.duration}
                    type='number' 
                    name='duration' 
                />
            <label htmlFor='img_url'>Image URL</label>
                <input 
                    onChange={props.handleAddTripChanges}
                    value={props.newTrip.img_url}
                    type='text' 
                    name='img_url' 
                />
            <button type='submit'>Add To My Trips</button>
        </form>
    );
}

export default AddTripForm;