import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
    return (
        <header>
           
            
            <h4>LaundryKart
            </h4>
           
            
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li> {/* Add the Home link */}
                    <li><Link to="/pricing">Pricing</Link></li> {/* Add the Pricing link */}
                    <li><Link to="/career">Career</Link></li> {/* Add the Career link */}
                   
                    <button onClick={props.change}>
                        <Link to={props.path} className="Link">{props.navVariable}</Link>
                    </button>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
