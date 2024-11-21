import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>The daily blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create"> Add blog</Link>
            </div>
            
        </div>
    );
};

export default Navbar;