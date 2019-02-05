import React from 'react'

const Test = props => {
    return (
        <h1 onClick={() => props.history.push('/login')}>Test</h1>
    )
}

export default Test;