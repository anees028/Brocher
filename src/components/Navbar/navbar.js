import React, {useState} from 'react'
import { Link, NavLink} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';


function Navbar() {
    //For making the toggle on small to medium devices...
    //Hide default hidden by setting state FASLE....
    const [showLinks, setShowLinks ] = useState(false);

    return (
        <div className="Navbar">
            <div className="leftSide">
                <div className="title">
                    <h2>Ecommerce Store</h2>
                    <p>You can get stuff of your choice!</p>
                </div>
            </div>
            <div className="rightSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <NavLink to="/home" activeClassName="active" className="navlink-style" >
                        Home 
                    </NavLink>
                    <NavLink to="/about" activeClassName="active" className="navlink-style">
                        About
                    </NavLink>
                    <NavLink to="/service" activeClassName="active" className="navlink-style">
                        Services
                    </NavLink>
                    <NavLink to="/contact" activeClassName="active" className="navlink-style">
                        Contact
                    </NavLink>
                </div>
                <div className="btn">
                    <Link to="/" className="btn-Signup">
                        Sign Up
                    </Link>
                </div>
                <div className="barsbtn" >
                    <FaBars onClick={()=> setShowLinks(!showLinks)}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
