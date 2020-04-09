import React from 'react'

const Navbar = (props) => {
    return(
        <div className="navbar">
            Navbar
            {props.cart}
        </div>
    )
}

export default Navbar