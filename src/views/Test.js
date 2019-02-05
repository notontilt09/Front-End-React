import React from 'react'

const Test = props => {
    return (
        <h1 onClick={() => props.history.push('/login')}>Click to go to Login Page</h1>
    )
}

export default Test;