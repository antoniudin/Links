import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import withLogin from './withLogin';

class Menu extends React.Component {

    render() { 
        const {user} = this.props;
        const userLogin = localStorage.getItem('userLogin')
        return <div className="nav menu">
        
        {!userLogin && (<div className="menuItem">
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/" className="mItem">Login</Link>
        </div>)}
    
        {userLogin && (<div className="menuItem">
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/page/links" className="mItem">Dashboard</Link>
        </div>)}
        
        {userLogin && <p className="userMenuItem">{"User: " + user}</p>}

        {userLogin && (<div className="menuItem">
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/page/logout" className="mItem">Logout</Link>
        </div>)}

        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/page/reg" className="menuItem">Register</Link>

    </div>;
    }
}
 
export default Menu;