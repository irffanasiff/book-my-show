import React from 'react'
import Navbar from '../components/Navbar/Navbar.components'

const MovieLayout = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}

export default MovieLayout
