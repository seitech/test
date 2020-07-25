import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="navbar">
                <NavLink exact to="/">
                    home
                </NavLink>
                <NavLink to="/categories/cinemas">
                    cinema
                </NavLink>
                <NavLink to="/categories/geographies">
                    geographie
                </NavLink>
                <NavLink to="/categories/mathematiques">
                    mathematique
                </NavLink>
                <NavLink to="/categories/histoires">
                    histoire
                </NavLink>
            </div>
         );
    }
}
 
export default Navbar;