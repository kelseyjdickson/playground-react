import React, { Component } from 'react';
import { MenuItem } from "./MenuItem";
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <nav className="NavBarItems">
                <h1 className="navbar-logo">Kelsey Dickson</h1>
                <div className="menu-icon">

                </div>
                <ul>
                    { MenuItem.map((item, index) => {
                        return (

                            <li key={index}>
                                <a className={item.cName}
                                    href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>
            </nav>
                    
        )
    }
}

export default NavBar