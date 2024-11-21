import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>SORRY</h2>
            <p>This is invalid page</p>
            <Link to='/'  >back to home page</Link>
        </div>
    );
};

export default NotFound;